import React,{Component} from 'react';
import CommentStore from './stores/CommentStore';
import CommentList from './commentList';
import CommentForm from './CommentForm';

class CommentBox extends Component{
    constructor(props){
        super(props);

        this.state = this.getOwnState();
    }
    getOwnState(){
        return{
            comment: CommentStore.getState()
        };
    }
    onChange=()=>{
        this.setState(this.getOwnState);
    }
    componentDidMount(){
        CommentStore.subscribe(this.onChange);
    }
    componentWillUnmount(){
        CommentStore.unsubscribe(this.onChange);
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