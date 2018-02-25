import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
    constructor() {
      super();
      this.state = {message: ''}
    }
  
    render() {
      return (
        <div className='LandingPage'>
          <Link to='/signup'>Sign Up</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  };

export default LandingPage;