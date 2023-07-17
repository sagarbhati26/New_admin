import React, { useState } from 'react';

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderBatches = () => {
    if (selectedOption === 'fsd') { 
      return (
        <div>
          <button>B1</button>
          <button>B2</button>
          <button>B3</button>
        </div>
      );
    } else if (selectedOption === 'ds') {
      return (
        <div>
          <button>B5</button>
          <button>B6</button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">Course</div>
        <select className="dropdown show" value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select an option</option>
          <option value="fsd">FSD</option>
          <option value="ds">DS</option>
        </select>
      </div>
      <div className="dropdown-container">
        {renderBatches()}
      </div>
    </div>
  );
};

export default DropDown;
