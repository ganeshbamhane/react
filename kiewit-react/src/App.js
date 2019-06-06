import React, { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import Courses from "./Courses";
import { Route, Switch } from "react-router-dom";
import ManageCourse from "./ManageCourse";
import * as CourseApi from "./api/courseApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [courses, setCourses] = useState([]);

  function loadCourses() {
    return CourseApi.getCourses()
      .then(courses => setCourses(courses))
      .catch(error => toast.error("loading failed: Error - " + error.message));
  }

  async function deleteCourse(courseId) {
    try {
      await CourseApi.deleteCourse(courseId);
      setCourses(courses.filter(course => course.id !== courseId));
      toast.success("Delete Successful.");
    } catch {
      toast.error("Delete Failed");
    }
  }

  return (
    <>
      <ToastContainer />
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/courses"
          render={props => (
            <Courses
              loadCourses={loadCourses}
              deleteCourse={deleteCourse}
              courses={courses}
              {...props}
            />
          )}
        />
        <Route
          path="/course/:slug?"
          render={props => (
            <ManageCourse
              {...props}
              loadCourses={loadCourses}
              courses={courses}
            />
          )}
        />
        )} />
      </Switch>
    </>
  );
};

export default App;
