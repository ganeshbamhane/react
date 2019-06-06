import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <center>
        <Link to="/">Home</Link> | <Link to="/courses">Courses</Link>
      </center>
    </>
  );
};

export default Nav;
