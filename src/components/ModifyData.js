import React, { useState } from 'react';
import axios from 'axios';
import './ModifyData.css'; // Assuming you'll create a CSS file for styling

function ModifyData() {
  const [id, setId] = useState('');
  const [newData, setNewData] = useState('');

  const handleModify = async (e) => {
    e.preventDefault();
    if (!id || !newData) return alert('Please enter both ID and new data!');
    try {
      const response = await axios.put('https://mydbbackend.onrender.com/modify-data', { id, newData });
      alert('Data modified successfully!');
      setId('');
      setNewData('');
    } catch (error) {
      console.error('Error modifying data:', error);
    }
  };

  return (
    <div className="modify-data-container">
      <h2>Modify Data</h2>
      <form onSubmit={handleModify} className="modify-data-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter the unique ID"
          className="input-field"
        />
        <input
          type="text"
          value={newData}
          onChange={(e) => setNewData(e.target.value)}
          placeholder="Enter the new data"
          className="input-field"
        />
        <button type="submit" className="modify-button">Modify</button>
      </form>
    </div>
  );
}

export default ModifyData;

