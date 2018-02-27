import  React from 'react';
import {Link} from 'react-router-dom';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
      <div className='AboutUs'>
          <header className="Header">Fluffsters</header>
          <Link to='/'>Home</Link>
          <h1> 
              Test! Puppies rock!
          </h1>
      </div>
    );
  };

export default AboutUsPage;