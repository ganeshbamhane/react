import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { course } from "./propTypes";

export default function Courses({ courses, loadCourses, deleteCourse }) {
  useEffect(() => {
    if (courses.length === 0) loadCourses();
  }, [courses.length, loadCourses]);

  return (
    <>
      <center>
        <br />
        <Link to="course" className="btn btn-primary">
          Add Course
        </Link>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th />
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button
                    onClick={() => {
                      return deleteCourse(course.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>{course.id}</td>
                <td>
                  <Link to={"/course/" + course.slug}>{course.title}</Link>
                </td>
                <td>{course.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </>
  );
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(course).isRequired,
  loadCourses: PropTypes.func.isRequired
};
