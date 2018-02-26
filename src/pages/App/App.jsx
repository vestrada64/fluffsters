import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LandingPage from '../LandingPage/LandingPage';

class App extends Component {

  constructor() {
    super();
    this.state = {
      puppy: null,
      name: "",
      description: "",
      breed: ""

    }
  }

handleSignup = () => {
  this.setState({user: userService.getUser()});
}

handleLogin = () => {
  this.setState({user: userService.getUser()});
}

handleLogout = () => {
  userService.logout();
  this.setState({user: null});
}
  
/*------- Lifecycle Methods ---------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fluffsters 🐶</h1>
        </header>
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
                    <LandingPage />
            }/>
            <Route exact path='/login' render={(props) => 
                  <LoginPage
                    {...props}
                    handleLogin={this.handleLogin}
                  />
                }/>
                <Route exact path='/signup' render={(props) => 
                  <SignupPage
                    {...props}
                    handleSignup={this.handleSignup}
                  />
                }/>
          </Switch>
        </Router>
      </div>
    );
  }
}


export default App;