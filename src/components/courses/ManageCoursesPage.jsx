import React, {useState} from "react";
import {courseAdded} from "../../store/courses";
import useCourses from "../../hooks/useCourses";

const newCourse = {id: null, title: "", authorId: "", category: ""};

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const {dispatch, courses, authors} = useCourses();

  const handleChange = (e) => {
    // const {name, value} = e.target;
    // setCourse((v) => ({...v, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(courseAdded(course));
    // setCourse(initialCourse);
  };

  return (
    <div className="container mt-5">
      <h1>Manage Course</h1>
    </div>
  );
};

export default ManageCoursesPage;
