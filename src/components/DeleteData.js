import React, { useState } from 'react';
import axios from 'axios';
import './DeleteData.css'; // Assuming you'll create a CSS file for styling

function DeleteData() {
  const [id, setId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!id) return alert('Please enter the unique ID to delete!');
    try {
      await axios.delete(`https://mydbbackend.onrender.com/delete-data/${id}`);
      alert('Data deleted successfully!');
      setId('');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="delete-data-container">
      <h2>Delete Data</h2>
      <form onSubmit={handleDelete} className="delete-data-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter the unique ID"
          className="input-field"
        />
        <button type="submit" className="delete-button">Delete</button>
      </form>
    </div>
  );
}

export default DeleteData;
