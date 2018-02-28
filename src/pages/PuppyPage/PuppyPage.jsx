import React from 'react';
import {Link} from 'react-router-dom';
import './PuppyPage.css';
import NavBar from '../../components/NavBar/NavBar';

const PuppyPage = (props) => {
    return (
        <div className='PuppyIntro'>
        <NavBar user={props.user} handleLogout={props.handleLogout} />
        <header> Puppy Gallery</header>
        </div>
    )
};



export default PuppyPage;