import React from 'react';
import './CommentsPage.css'
import { Link } from 'react-router-dom';

const CommentsPage = ({ onNameChange, onCommentsChange, name, comments, createComments }) => {
    return (
    <div>
        <form onSubmit={createComments}> 

        <label> 
            Name 
            <input type="text" value={name} onChange={onNameChange} />
        </label>

        <br/>
        <br/>

        <textarea placeholder="Your experience with dogs? How have they helped you?" value={comments} onChange={onCommentsChange} />

        <input type="submit" value ="New Comment" />

        </form>
    </div>
    )
}

export default CommentsPage;