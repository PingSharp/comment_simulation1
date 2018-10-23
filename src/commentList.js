import React,{Component} from 'react';

function CommentList ({comments}) {
    return(
        <ul className="comment-box">
            {
                comments.map((entry,i)=>(
                    <li key={`response-${i}`} className="comment-item">
                        <p className="comment-item-name">{entry.name}</p>
                        <p className="comment-item-content">{entry.content}</p>
                        <p className="comment-item-time">{entry.publishTime}</p>

                    </li>
                ))
            }
        </ul>
    )
}

export default CommentList;