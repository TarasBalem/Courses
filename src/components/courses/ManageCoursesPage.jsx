import React, {useState} from "react";
import {Redirect, useParams} from "@reach/router";
import {courseAdded} from "../../store/courses";
import useCourses from "../../hooks/useCourses";
import CourseForm from "./CourseForm";

const newCourse = {id: null, title: "", authorId: "", category: ""};

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const {dispatch, courses, authors} = useCourses();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: name === "authorId" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
    // dispatch(courseAdded(course));
    // setCourse(initialCourse);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <CourseForm
          course={course}
          authors={authors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          saving={false}
        />
      </div>
    </div>
  );
};

export default ManageCoursesPage;
