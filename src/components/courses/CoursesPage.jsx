import React, {useState} from "react";
import {courseAdded} from "../../store/courses";
import useCourses from "../../hooks/useCourses";
import CoursesList from "./CoursesList";

const initialCourse = {
  title: "",
};

const CoursesPage = () => {
  const [course, setCourse] = useState(initialCourse);
  const {dispatch, courses} = useCourses();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCourse((v) => ({...v, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(courseAdded(course));
    setCourse(initialCourse);
  };

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                onChange={handleChange}
                value={course.title}
                name="title"
                id="title"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary my-3">Add Course</button>
            </div>
          </div>
        </div>
      </form>
      <CoursesList courses={courses} />
    </div>
  );
};

export default CoursesPage;
