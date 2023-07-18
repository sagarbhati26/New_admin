import React, { useState } from 'react';
import './Cource.css';

const Course = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderBatches = () => {
    if (selectedOption === 'fsd') {
      return (
        <div>
          <h3>FSD</h3>
          <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
            <h4>A1</h4>
            <div className='labelData'>
              <label for="label1" className="label">Total Students: </label>
              <label for="label2" className="label">100</label> <br />
              <label for="label1" className="label">Present </label>
              <label for="label2" className="label">90</label>
            </div>
          </div>


          <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
          <h4>A2</h4>
            <div className='labelData'>
              <label for="label1" className="label">Total Students: </label>
              <label for="label2" className="label">200</label> <br />
              <label for="label1" className="label">Present</label>
              <label for="label2" className="label">170</label>
            </div>


          </div>

          <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
          <h4>A3</h4>
            <div className='labelData'>
              <label for="label1" className="label">Total Students:</label>
              <label for="label2" className="label">500</label> <br />
              <label for="label1" className="label">Presents:</label>
              <label for="label2" className="label">450</label>
            </div>
          </div>

        </div>
      );
    } else if (selectedOption === 'ds') {
      return (
        <div className=''>
            <h3>DS</h3>
          <div className="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
          <h4>B1</h4>
            <div className='labelData'>
              <label for="label1" className="label">Total Students: </label>
              <label for="label2" className="label">300</label> <br />
              <label for="label1" className="label">Present:</label>
              <label for="label2" className="label">255</label>
            </div>
          </div>


          <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem" }}>
          <h4>B2</h4>
            <div className='labelData'>
              <label for="label1" className="label">Total Students: </label>
              <label for="label2" className="label">100</label> <br />
              <label for="label1" className="label">Present:</label>
              <label for="label2" className="label">60:</label>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className='card-main'>
        <div className="card">
          <div className="card-content">
            <div className="card-title"></div>
            <div className="dropdown-container">
              <span className='course' style={{padding:'10px',paddingTop:'25px', fontSize:'20px' }}><div className="dropdown-label">Course : </div></span>

              <select
                className="dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">Select an option</option>
                <option value="fsd">FSD</option>
                <option value="ds">DS</option>
              </select>
            </div>
          </div>
          {renderBatches()}
        </div>
      </div>
    </div>
  );
};

export default Course;
