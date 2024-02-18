import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Follow us! We're friendly:</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li>Become a Tasker</li>
            <li>Services By City</li>
            <li>All Services</li>
            <li>Elite Taskers</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Taskrabbit for Good</li>
            <li>Blog</li>
            <li>Terms & Privacy</li>
            <li>California Consumer Notice</li>
            <li>Do Not Sell My Personal Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Download our app</h3>
          <p>Tackle your to-do list wherever you are with our mobile app.</p>
          <div className="app-links">
            <a href="#">Download app from Apple Store</a>
            <a href="#">Download app from Google Play Store</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
