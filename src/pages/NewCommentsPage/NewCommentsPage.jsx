import React from 'react';
import './NewCommentsPage.css'
import { Link } from 'react-router-dom';

const NewCommentsPage = ({ onNameChange, onDescriptionChange, name, description, newComment }) => {
    return (
    <div>
        <form onSubmit={newComment}> 

        <label> 
            Name 
            <input type="text" value={name} onChange={onNameChange} />
        </label>

        <br/>
        <br/>

        <textarea placeholder="Your experience with dogs? How have they helped you?" value={description} onChange={onDescriptionChange} />

        <input type="submit" value ="Comment" />

        </form>
    </div>
    )
}

export default NewCommentsPage;