import React, {lazy, Suspense} from "react";
import {Router} from "@reach/router";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import Spinner from "./components/common/Spinner";

const CoursesPage = lazy(() => import("./components/courses/CoursesPage"));
const ManageCoursesPage = lazy(() =>
  import("./components/courses/ManageCoursesPage")
);
const AboutPage = lazy(() => import("./components/about/AboutPage"));
const PageNotFoud = lazy(() => import("./components/common/PageNotFound"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Header />
        <Router>
          <HomePage path="/" />
          <CoursesPage path="/courses" />
          <AboutPage path="/about" />
          <ManageCoursesPage path="/course/:slug" />
          <PageNotFoud default />
        </Router>
        <ToastContainer autoClose={3000} />
      </Suspense>
    </div>
  );
};

export default App;
