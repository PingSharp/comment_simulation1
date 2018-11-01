import React,{Component} from 'react';
import CommentActions from './actionCreator';
import CommentStore from './stores/CommentStore';
/* function CommentList ({comments}) {
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
} */
class CommentList extends Component {  
     componentDidMount() { 
            CommentStore.dispatch(CommentActions.loadComment()); 
          } 
 render() { 
        const list = this.props.comments.comment; 
   return (   <ul className="comment-box"> 
        {list.map((entry, i) => (  
              <li key={`reponse-${i}`} className="comment-item"> 
                    <p className="comment-item-name">{entry.name}</p> 
                      <p className="comment-item-content">{entry.content}</p>
                      <p className="comment-item-time">{entry.publishTime}</p> 
                         </li>  
                          ))}   </ul>    );   } }

export default CommentList;