import  React from 'react';
import { Link } from 'react-router-dom';
import './AboutUsPage.css';

const AboutUsPage = () => {
    return (
      <div className='AboutUs'>
          <header className="Header">- Our Mission -</header>
          <Link className ="abouthomebtn"to='/'>Home</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a className="article" href="https://www.psychologytoday.com/blog/canine-corner/201106/can-dogs-help-humans-heal" target="_blank" rel="noopener noreferrer">Click here to read a small article!</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <img alt ="puppy" className="aboutusimg" src="https://i.imgur.com/uHVNhRr.jpg"></img>
          <h1> Comfort, companionship, and love. If depression makes you feel lonely, pets can break the cycle.</h1>
          <h2>Did you know that pets also come with some pretty powerful mental and physical health benefits? </h2>
          <h3>Dogs in particular can reduce stress, anxiety, and depression, ease loneliness, encourage exercise and playfulness</h3>
          <h4> If you're feeling down just look at images of puppies!</h4>
      </div>
    );
};

export default AboutUsPage;