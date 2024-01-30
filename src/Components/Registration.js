import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";


const Registration = ({preFilledData}) => {
  console.log("prefilled data", preFilledData);
  const initialValues = {
    firstName: preFilledData ? preFilledData.user.first_name : "",
    lastName: preFilledData ? preFilledData.user.last_name : "",
    email: preFilledData ? preFilledData.user.email : "",
    password: preFilledData ? preFilledData.user.password : "",
    confirmPassword: "",
    gender: "",
    smoke: "",
    dob: ""
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      firstName: Yup.string().min(3).max(10, "Must be 10 characters or less"),
      lastName: Yup.string()
        .min(3)
        .max(15, "Must be 15 character or less")
        .required("Please enter last name"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be minimum of 8 characters")
        .required("Please enter your password"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
      gender: Yup.string().required("Please select a gender"),
      smoke: Yup.string().required("Please indicate if you smoke"),
      dob: Yup.date()
    //   dob: Yup.date().when("smoke", {
    //     is: (smoke) => smoke === "yes",
    //     then : Yup.date().required("Please enter your date of birth")
    //  }),
    }),
    onSubmit: async (values, action) => {
      console.log("values", values);
      //   action.resetForm();
      const response = await fetch("http://localhost:5000/anime/registration", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(values)
      })
      console.log("response",response);
    },  
  });
//    console.log("formik", formik);
//   console.log("errors", formik.errors);

  return (
    <>
      <div className="container text-center my-3">
        <h2>Registration Page</h2>
        <Link to="/"><button className="my-3">Back to Home</button></Link>
      </div>
      <form className="container" onSubmit={formik.handleSubmit}>
        <fieldset disabled={preFilledData ? "disabled" : null}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <span className="text-danger">{formik.errors.lastName}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="text-danger">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="mb-3">
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
          {formik.errors.password && formik.touched.password ? (
            <span className="text-danger">{formik.errors.password}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <span className="text-danger">{formik.errors.confirmPassword}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            className="form-select"
            name="gender"
            id="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formik.errors.gender && formik.touched.gender ? (
            <span className="text-danger">{formik.errors.gender}</span>
          ) : null}
        </div>
        <div className="mb-3">
          <label htmlFor="smoke" className="form-label">
            Do you smoke?
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="yes"
              name="smoke"
              id="smokeYes"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="form-check-label" htmlFor="smokeYes">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              value="no"
              name="smoke"
              id="smokeNo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="form-check-label" htmlFor="smokeNo">
              No
            </label>
          </div>
          {formik.errors.smoke && formik.touched.smoke ? (
            <span className="text-danger">{formik.errors.smoke}</span>
          ) : null}
        </div>
        
        {formik.values.smoke === "yes" && (
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            DOB:
          </label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.dob && formik.touched.dob ? (
            <span className="text-danger">{formik.errors.dob}</span>
          ) : null}
        </div>
        )}

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        </fieldset>
      </form>
    </>
  );
};

export default Registration;
