// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="landing-page">
//       <div className="landing-content">
//         <h1>Welcome to Service Bridge</h1>
//         <p>This is a platform connecting people in need of services with qualified taskers.</p>
//       </div>
//       <img src= ' https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/420222470_714713444116433_9180594242928864586_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHM57HeexL-0GjnpKPFNEGb6Aj_AOGAGHjoCP8A4YAYePWm7lziHBkd_CD3zEIu3LwhNHBj4k8aie5pxqU0QQKp&_nc_ohc=4GVj6ec7d0kAX8Tg-OB&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&oh=00_AfASkmIXlQmFkklL7S_aXvUaTKXhg0f_0jrwNFyFMNyBRw&oe=65DF1D64' alt="Landing Page" className="landing-image" />
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Service Bridge</h1>
        <p>This is a platform connecting people in need of services with qualified taskers.</p>
      </div>
      <div className="landing-details">
        <h2>Book trusted help for home tasks</h2>
        <ul>
          <li>Assembly</li>
          <li>Mounting</li>
          <li>Moving</li>
          <li>Cleaning</li>
          <li>Outdoor Help</li>
          <li>Home Repairs</li>
          <li>Painting</li>
          <li>Trending</li>
        </ul>
        <div className="popular-projects">
          <h3>Popular Projects</h3>
          <p>a person assembling furniture using an allen wrench</p>
          <p>Furniture Assembly</p>
          <p>Projects starting at $49</p>
          {/* Add more popular projects here */}
        </div>
        <div className="testimonials">
          <h3>See what happy customers are saying about Service Bridge</h3>
          <p>Elizabeth P. - "Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes."</p>
          <p>Tiffany B. - "David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal and went through the directions with us in the event we have to change crib settings."</p>
          {/* Add more testimonials here */}
        </div>
        <div className="how-it-works">
          <h2>How it works</h2>
          <ol>
            <li>Choose a Tasker by price, skills, and reviews.</li>
            <li>Schedule a Tasker as early as today.</li>
            <li>Chat, pay, tip, and review all in one place.</li>
          </ol>
          <button>Get help Today</button>
          <button>See All Services</button>
        </div>
      </div>
      <img src="https://scontent.fnbo13-1.fna.fbcdn.net/v/t39.30808-6/420222470_714713444116433_9180594242928864586_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHM57HeexL-0GjnpKPFNEGb6Aj_AOGAGHjoCP8A4YAYePWm7lziHBkd_CD3zEIu3LwhNHBj4k8aie5pxqU0QQKp&_nc_ohc=4GVj6ec7d0kAX8Tg-OB&_nc_zt=23&_nc_ht=scontent.fnbo13-1.fna&oh=00_AfASkmIXlQmFkklL7S_aXvUaTKXhg0f_0jrwNFyFMNyBRw&oe=65DF1D64" alt="Landing Page" className="landing-image" />
    </div>
  );
};

export default LandingPage;
