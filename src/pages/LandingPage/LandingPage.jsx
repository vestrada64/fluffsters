import React from 'react';
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar';

const LandingPage = (props) => {
  return (
    <div className="LandingPage">
      <NavBar user={props.user} handleLogout={props.handleLogout} />
      <img className="intropuppy" src="https://i.imgur.com/Ovfsqoa.gif"></img>
      </div>
  );

}
  

export default LandingPage;