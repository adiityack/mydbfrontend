import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddData from './components/AddData';
import ModifyData from './components/ModifyData';
import DeleteData from './components/DeleteData';
import DisplayData from './components/DisplayData';
import './App.css'; // Assuming you'll create a CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1 className="main-heading">Aditya Chand Database NoSQL</h1>
          <h2 className="sub-heading">Data Management System</h2>
        </header>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/add" className="nav-link">Add Data</Link></li>
            <li><Link to="/modify" className="nav-link">Modify Data</Link></li>
            <li><Link to="/delete" className="nav-link">Delete Data</Link></li>
            <li><Link to="/display" className="nav-link">Display Data</Link></li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/add" element={<AddData />} />
            <Route path="/modify" element={<ModifyData />} />
            <Route path="/delete" element={<DeleteData />} />
            <Route path="/display" element={<DisplayData />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
