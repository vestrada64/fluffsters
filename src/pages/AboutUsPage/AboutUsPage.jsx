import  React from 'react';
import {Link} from 'react-router-dom';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
      <div className='AboutUs'>
          <header className="Header">- Our Mission -</header>
          <Link className ="homebtn"to='/'>Home</Link>
          <img src="https://i.imgur.com/uHVNhRr.jpg"></img>
          <h1> Comfort, companionship, and love. If depression makes you feel lonely, pets can break the cycle.</h1>
          <h2>Did you know that pets also come with some pretty powerful mental and physical health benefits? </h2>
          <h3>Dogs in particular can reduce stress, anxiety, and depression, ease loneliness, encourage exercise and playfulness</h3>
          <h4> If you're feeling down just look at images of puppies!</h4>
          <a href="https://www.purina.com/dogs/dog-articles/getting-a-dog/do-dogs-help-relieve-stress">Click here to read a small article!</a>
      </div>
    );
  };

export default AboutUsPage;