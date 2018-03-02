import React from 'react';

const CommentsPage = ({ onNameChange, onDescriptionChange, name, description, createComments }) => {
    <form onSubmit={createComments}> 

        <label> 
            Name 
            <input type="text" value={name} onChange={onNameChange} />
        </label>

        <br/>
        <br/>

        <textarea placeholder="Your experience with dogs? How have they helped you?" value={description} onChange={onDescriptionChange} />

        <input type="submit" value ="New Comment" />

     </form>
}

export default CommentsPage;