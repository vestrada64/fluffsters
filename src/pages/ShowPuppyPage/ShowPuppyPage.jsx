import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './ShowPuppyPage.css';

const ShowPuppyPage = ({ puppyData }, props) => (
    <div>
        <Link className ="backbtn"to='/puppies'>Back</Link>
        <h1 className="puppyname">{puppyData.name}</h1>
        <h2 className="puppybreed">{puppyData.breed}</h2>
        <h3 className="puppyinfo">{puppyData.description}</h3>
        <img className="imgpuppy" src={puppyData.image_url}></img>
    </div>
)

export default ShowPuppyPage;