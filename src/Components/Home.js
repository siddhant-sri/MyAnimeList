import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center my-3">
      <h1>Home Page</h1>
      <button className="btn btn-success m-3">
        <Link className="text-white" to="/registration">
          Register
        </Link>
      </button>
      <button className="btn btn-success">
        <Link className="text-white" to="/login">
          Sign In
        </Link>
      </button>
    </div>
  );
};

export default Home;
