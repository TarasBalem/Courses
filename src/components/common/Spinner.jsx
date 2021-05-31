import React from "react";

const Spinner = () => (
  <div className="container mt-5">
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

export default Spinner;
