import React from 'react';
import './NewCommentsPage.css'
import { Link } from 'react-router-dom';

const NewCommentsPage = ({ onNameChange, onDescriptionChange, name, description, newComment }) => {
    return (
    <div>
        <form onSubmit={newComment}> 
        <Link className ="homebtn"to='/puppies'>Back</Link>
        <label> 
            <header>Struggle dealt with? </header>
            <input className="textinfo" type="text" value={name} onChange={onNameChange} />
        </label>

        <br/>
        <br/>

        <textarea placeholder="Your experience with dogs? How have they helped you?" value={description} onChange={onDescriptionChange} />
        <input className="Comment" type="submit" value ="Comment" />

        </form>
    </div>
    )
}

export default NewCommentsPage;