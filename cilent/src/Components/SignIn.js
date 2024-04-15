import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  userName: "",
  password: "",
};

const schema = Yup.object({
  userName: Yup.string()
    .required("Email is required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required field")
    .min(8, "Password must be at least 8 characters"),
});

export default function SignIn({getUserData}) {
    const navigate = useNavigate();

    // const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Formik 
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={async (values) => {
          console.log(values);

          const response = await fetch("http://localhost:5000/anime/login", {
            method : "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(values)
          })
          console.log(response);
    
          // Handle successful response
          const userData = await response.json();
          console.log("Login successful:", userData);
          alert(JSON.stringify(userData));  
          getUserData(userData);

          if(response.ok){
            navigate("/main");
          } 

        //   alert(JSON.stringify(response));
        }}
      >
        
        {(formik) => (
          console.log("firmik", formik),
          console.log("errors", formik.errors),
          (
            <form className="container" onSubmit={formik.handleSubmit}>
              <div  className="text-center my-3">
                    <h2 className="text-center my-3">Sign In Page</h2>
                    <Link to="/"><button>Back to Home</button></Link>
              </div>
              <div className="my-3">
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span className="text-danger">{formik.errors.userName && formik.touched.userName && formik.errors.userName}</span>
              </div>
              <div className="my-3">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {/* <span className="text-danger">{formik.errors.password && formik.touched.password && formik.errors.password}</span> */}
                {formik.errors.password && formik.touched.password ? (
                    <span className="text-danger">{formik.errors.password}</span>
                ) : null}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </form>
          )
        )}
      </Formik>
    </>
  );
}
