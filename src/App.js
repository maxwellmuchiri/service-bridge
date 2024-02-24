// App.js



import React from 'react';
import './App.css'; // Import the CSS file
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/Landingpage';
const App = () => {
  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <LandingPage /> {/* Render the LandingPage component */}
      <div className="content">
        {/* Other components and content */}
      </div>
      <Footer /> {/* Render the Footer component */}  
    </div>
  );
}

export default App;
