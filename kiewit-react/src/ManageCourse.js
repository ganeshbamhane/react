import React, { useState, useEffect } from "react";
import { saveCourse } from "./api/courseApi";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { course } from "./propTypes";
import TextInput from "./Shared/TextInput";

function ManageCourse({ courses, loadCourses, match }) {
  const [course, setCourse] = useState({
    title: "",
    authorId: null,
    category: ""
  });

  const [redirectToCoursesPage, setRedirectToCoursesPage] = useState(false);

  //componentDidMount() replace to useEffect in function
  useEffect(() => {
    const { slug } = match.params;
    if (slug) {
      if (courses.length === 0) {
        loadCourses().then(() => {
          setCourse(getCourseBySlug(slug));
        });
      } else {
        setCourse(getCourseBySlug(slug));
      }
    }

    function getCourseBySlug(slug) {
      return courses.find(course => course.slug === slug);
    }
  }, [courses, loadCourses, match.params]);

  function handleChange(event) {
    const newCourse = { ...course };
    newCourse[event.target.name] = event.target.value;
    setCourse(newCourse);
  }

  // Hipster.js
  //   handleChange = ({ target }) => {
  //     const course = {
  //       ...course,
  //       [target.name]: target.value
  //     };
  //     setState({ course });
  //   };

  function handleSubmit(event) {
    event.preventDefault(); // hey browser, don't post back.
    saveCourse(course).then(() => {
      loadCourses();
      setRedirectToCoursesPage(true);
    });
  }

  if (redirectToCoursesPage) return <Redirect to="/courses" />;

  return (
    <>
      <center>
        <h1>Manage Course</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            id="title"
            name="title"
            onChange={handleChange}
            value={course.title}
          />

          <TextInput
            label="Author Id"
            id="authorId"
            name="authorId"
            onChange={handleChange}
            value={course.authorId || ""}
          />

          <TextInput
            label="Category"
            id="category"
            name="category"
            onChange={handleChange}
            value={course.category}
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Save" />
        </form>
      </center>
    </>
  );
}

ManageCourse.propTypes = {
  courses: PropTypes.arrayOf(course).isRequired,
  loadCourses: PropTypes.func.isRequired
};

export default ManageCourse;
