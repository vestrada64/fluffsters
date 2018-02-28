import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './ShowPuppyPage.css';

const ShowPuppyPage = ({ puppyData }, props) => (
    <div>
        <h1>{puppyData.name}</h1>
        <h1>{puppyData.breed}</h1>
        <h1>{puppyData.description}</h1>
        <img className="showpuppy" src={puppyData.image_url}></img>
    </div>
)

export default ShowPuppyPage;