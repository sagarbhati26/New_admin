import React, { useState } from "react";
import "./Cource.css";
import BatchReport from "./BatchReport";

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState("FSD");
  const [showComponent, setShowComponent] = useState(false);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleIconClick = () => {
    setShowComponent(true);
  };

  const handleCloseComponent = () => {
    setShowComponent(false);
  };

  return (
    <div className="cource-box">
      <div className="row bg-white">
        <div className="col-md-9 offset-md-1">
          <div className="mb-4">
            <div className="dropdown">
              <button className="dropdown-button btn">Select Course</button>
              <div className="dropdown-content">
                <button
                  className="btn"
                  value="FSD"
                  onClick={handleCourseChange}
                >
                  FSD
                </button>
                <button className="btn" value="DS" onClick={handleCourseChange}>
                  DS
                </button>
                <button
                  className="btn"
                  value="AWS"
                  onClick={handleCourseChange}
                >
                  AWS
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card rounded shadow-sm p-3 mb-4 green-gradient">
                <h5 className="card-title" id="batch1">
                  batch-1
                </h5>
                <p className="card-text">
                  This is the first {selectedCourse} batch.
                </p>
                <a className="info-link" onClick={handleIconClick}>
                  <i className="bi bi-info-circle-fill ml-1 custom-icon"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded shadow-sm p-3 mb-4">
                <h5 className="card-title" id="batch1">
                  batch-2
                </h5>
                <p className="card-text">
                  This is the first {selectedCourse} batch.
                </p>
                <a className="info-link" onClick={handleIconClick}>
                  <i className="bi bi-info-circle-fill ml-1 custom-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded shadow-sm p-3 mb-4">
                <h5 className="card-title" id="batch1">
                  batch-3
                </h5>
                <p className="card-text">
                  This is the first {selectedCourse} batch.
                </p>
                <a className="info-link" onClick={handleIconClick}>
                  <i className="bi bi-info-circle-fill ml-1 custom-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded shadow-sm p-3 mb-4">
                <h5 className="card-title" id="batch1">
                  batch-4
                </h5>
                <p className="card-text">
                  This is the first {selectedCourse} batch.
                </p>
                <a className="info-link" onClick={handleIconClick}>
                  <i className="bi bi-info-circle-fill ml-1 custom-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded shadow-sm p-3 mb-4">
                <h5 className="card-title" id="batch1">
                  batch-5
                </h5>
                <p className="card-text">
                  This is the first {selectedCourse} batch.
                </p>
                <a className="info-link" onClick={handleIconClick}>
                  <i className="bi bi-info-circle-fill ml-1 custom-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded shadow-sm p-3 mb-4">
                <h5 className="card-title" id="batch1">
                  batch-6
                </h5>
                <p className="card-text">
                  This is the first {selectedCourse} batch.
                </p>
                <a className="info-link" onClick={handleIconClick}>
                  <i className="bi bi-info-circle-fill ml-1 custom-icon"></i>
                </a>
              </div>
            </div>

            {showComponent && (
              <div className="overlay">
                <div className="overlay-content">
                  <BatchReport />
                  <button
                    className="btn-close bg-primary"
                    onClick={handleCloseComponent}
                  >
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;