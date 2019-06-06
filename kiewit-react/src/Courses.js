import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { course } from "./propTypes";

export default class Courses extends React.Component {
  static propTypes = {
    courses: PropTypes.arrayOf(course).isRequired,
    loadCourses: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadCourses();
  }

  renderTable() {
    return (
      <>
        <Link to="course" className="btn btn-primary">
          Add Course
        </Link>
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
            {this.props.courses.map(course => (
              <tr key={course.id}>
                <td>
                  <button
                    onClick={() => {
                      return this.props.deleteCourse(course.id);
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
      </>
    );
  }

  render() {
    return (
      <>
        <h3>Courses:</h3>
        {this.renderTable()}
      </>
    );
  }
}
