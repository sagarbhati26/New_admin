import React, { useState } from 'react';
import './Cource.css'
const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState('FSD');

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="row container">
      <div className="col-md-9 offset-md-3">
        <div className="mb-4">
          <div className="dropdown">
            <button className="dropdown-button btn">Select Course</button>
            <div className="dropdown-content">
              <button className='btn' value="FSD" onClick={handleCourseChange}>FSD</button>
              <button className='btn' value="DS" onClick={handleCourseChange}>DS</button>
              <button className='btn' value="AWS" onClick={handleCourseChange}>AWS</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card rounded shadow-sm p-3 mb-4">
              <h5 className="card-title" id="batch1">
                batch-1
              </h5>
              <p className="card-text">This is the first {selectedCourse} batch.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded shadow-sm p-3 mb-4">
              <h5 className="card-title" id="batch2">
                batch-2
              </h5>
              <p className="card-text">This is {selectedCourse} batch-2.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded shadow-sm p-3 mb-4">
              <h5 className="card-title" id="batch3">
                batch-3
              </h5>
              <p className="card-text">This is {selectedCourse} batch-3.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card rounded shadow-sm p-3 mb-4">
              <h5 className="card-title" id="batch4">
                batch-4
              </h5>
              <p className="card-text">This is {selectedCourse} batch-4.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded shadow-sm p-3 mb-4">
              <h5 className="card-title" id="batch5">
                batch-5
              </h5>
              <p className="card-text">This is {selectedCourse} batch-5.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded shadow-sm p-3 mb-4">
              <h5 className="card-title" id="batch6">
                batch-6
              </h5>
              <p className="card-text">This is {selectedCourse} batch-6.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
