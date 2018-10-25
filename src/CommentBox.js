import React,{Component} from 'react';
import CommentStore from './stores/CommentStore';
import CommentList from './commentList';
import CommentForm from './CommentForm';

class CommentBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            comment: CommentStore.getComment(),
        };
    }
    _onChange=()=>{
        this.setState({
            comment: CommentStore.getComment(),
        });
    }
    componentDidMount(){
        CommentStore.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        CommentStore.removeChangeListener(this._onChange);
    }
    render(){
        return(
            <div>
                <CommentList comments={this.state.comment}/>
                <CommentForm/>
            </div>
        )
    }
}
export default CommentBox;