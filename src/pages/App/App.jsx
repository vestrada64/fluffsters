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
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PuppyPage from '../PuppyPage/PuppyPage';
import ShowPuppyPage from './../ShowPuppyPage/ShowPuppyPage';


class App extends Component {

  constructor() {
    super();
    this.state = {
      puppies: [],
      name: "",
      breed: "",
      image_url: "",
      description: ""

    }
  }

handleLogout = () => {
    userService.logout();
    this.setState({user: null});
}
  
handleSignup = () => {
  this.setState({user: userService.getUser()});
}

handleLogin = () => {
  this.setState({user: userService.getUser()});
}

  
/*------- Lifecycle Methods ---------*/

componentDidMount() {
  let user = userService.getUser();
  this.setState({user});
  fetch("/api/puppies")
  .then(res => res.json())
  .then(puppies => this.setState({ puppies }))
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fluffsters 🐶</h1>
          <h2 className="info"> Feeling down? You've come to the right place! </h2>
        </header>
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
                    <LandingPage 
                    user={this.state.user}
                    handleLogout={this.handleLogout}
                    />
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
                <Route exact path='/aboutus' render={() =>
                  userService.getUser() ?
                  <AboutUsPage />
                    :
                  <Redirect to='/login' 
                  />
                }/>
                <Route exact path='/puppies' render={() =>
                  userService.getUser() ?
                  <PuppyPage
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  puppies={this.state.puppies}
                  />
                    :
                  <Redirect to='/login' 
                  />
                }/>
                <Route path="/puppies/:id" render={ (props) => 
                <ShowPuppyPage 
                puppyData={this.state.puppies[props.match.params.id]} 
                /> 
                }/>
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;