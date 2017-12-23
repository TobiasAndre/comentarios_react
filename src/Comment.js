import React from 'react'

const Comment = (props) =>  
    <p className="well">
    {props.comment.comment}
        <b>por: {props.comment.user.name}</b>
    </p>
    
export default Comment
