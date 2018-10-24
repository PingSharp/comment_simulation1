import React,{Component} from 'react';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value:'',
            nameValue:''
        }
    }
    handelChange=(event)=>{
        this.setState({
            value: event.target.value
        })
    }
    handelNameChange = (event)=>{
        this.setState({
            nameValue: event.target.value
        })
    }
    render(){
        return(
            <div>
                <label>Your name:</label><input type="text"  onChange={this.handelNameChange}></input>
                <textarea className="comment-textarea"  onChange={this.handelChange}></textarea>
                <button className="submitButton" onClick={this.props.handelSubmit.bind(this,this.state.value,this.state.nameValue)}>submit</button>
            </div>
        )
    }
}
 export default CommentForm;