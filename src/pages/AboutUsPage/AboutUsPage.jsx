import  React from 'react';
import {Link} from 'react-router-dom';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
      <div className='AboutUs'>
          <header className="Header">- Our Mission -</header>
          <Link to='/'>Home</Link>
          <h1> 
          Comfort, companionship, and love. If depression makes you feel lonely, pets can break the cycle.
          </h1>
      </div>
    );
  };

export default AboutUsPage;