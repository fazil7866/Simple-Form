import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file

function Form() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [interests, setInterests] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, gender, category, interests };
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/respondents');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Simple Form</h2>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Gender:</label>
          <div>
            <label className="form-radio">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label className="form-radio">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Category:</label>
          <select
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Interests:</label>
          <div>
            <label className="form-checkbox">
              <input
                type="checkbox"
                value="Coding"
                onChange={(e) => setInterests((prev) => [...prev, e.target.value])}
              />
              Coding
            </label>
            <label className="form-checkbox">
              <input
                type="checkbox"
                value="Music"
                onChange={(e) => setInterests((prev) => [...prev, e.target.value])}
              />
              Music
            </label>
            <label className="form-checkbox">
              <input
                type="checkbox"
                value="Sports"
                onChange={(e) => setInterests((prev) => [...prev, e.target.value])}
              />
              Sports
            </label>
          </div>
        </div>
        <div className="form-group">
          <label className="form-checkbox">
            <input type="checkbox" required />
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
