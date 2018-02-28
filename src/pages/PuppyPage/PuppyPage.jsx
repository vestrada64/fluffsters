import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './PuppyPage.css';
import './../ShowPuppyPage/ShowPuppyPage';

const PuppyPage = ({ puppies }, props) => (
    <div>
        <h1>All Puppies</h1>
        <Link className ="homebtn"to='/'>Home</Link>
        <ul>
        { puppies.map((puppy, idx) => <li key={idx}><Link to={`/puppies/${idx}`}>{puppy.name}<img className="showpuppy" src={puppy.image_url}></img></Link></li>) }

        </ul>
    </div>
        
)



export default PuppyPage;