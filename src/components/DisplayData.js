import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayData() {
  const [fetchedData, setFetchedData] = useState([]);

  // Fetch the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mydbbackend.onrender.com/get-data');
        console.log('Fetched data:', response.data); // Log fetched data to inspect it
        setFetchedData(response.data); // Set the data into state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="display-data-container">
      <h2>Data from CSV</h2>
      <div className="data-list">
        <ul>
          {fetchedData.length > 0 ? (
            fetchedData.map((item, index) => (
              <li key={index} className="data-item">
                ID: {item.ID}, Data: {item.DATA}
              </li>
            ))
          ) : (
            <p>No data available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DisplayData;
