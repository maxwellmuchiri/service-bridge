// App.js
import React from 'react';
import './App.css'; // Import the CSS file
import Navbar from './components/Navbar';// Import the Navbar component

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="content">
        <h1>Welcome to My App</h1>
        {/* Other components and content */}
      </div>
    </div>
  );
}

export default App;


