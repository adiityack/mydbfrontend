import React, { useState } from 'react';
import axios from 'axios';
import './AddData.css'; // Assuming you'll create a CSS file for styling

function AddData() {
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data) return alert('Please enter some data!');
    try {
      const response = await axios.post('https://mydbbackend.onrender.com/add-data', { data });
      alert(`Data added with ID: ${response.data.id}`);
      setData(''); // Clear input field
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <div className="add-data-container">
      <h2>Add Data</h2>
      <form onSubmit={handleSubmit} className="add-data-form">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Enter some data"
          className="input-field"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AddData;
