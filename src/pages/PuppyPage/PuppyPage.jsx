import React from 'react';
import { Link } from 'react-router-dom';
import './PuppyPage.css';
import './../ShowPuppyPage/ShowPuppyPage';

const PuppyPage = ({ puppies }, props) => (
    <div className="Form">
        <header>Puppy Gallery</header>
        <Link className ="homebtn"to='/'>Home</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link className ="aboutus" to='/aboutus'>What is this App about?</Link>
        <div className="puppyimg">
        { puppies.map((puppy, idx) => <div key={idx}><Link className="Name" to={`/puppies/${idx}`}><h3 className="puppyName">{puppy.name}</h3><img className="showpuppy" src={puppy.image_url}></img></Link></div>) }
        </div>
    </div>
        
)

export default PuppyPage;