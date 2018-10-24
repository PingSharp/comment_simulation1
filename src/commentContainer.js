import React,{Component} from 'react';
import CommentList from './commentList';
import CommentForm from './CommentForm';

function dissoc(obj,prop){
    let result = {};
    for (let p in obj){
        if(p!==prop){
            result[p] = obj[p];
        }
    }
    return result;
}
const Promised = (promiseProp,Warpped)=>class extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            value: []
            
        }
        
    }
    componentDidMount(){
        
        this.props[promiseProp].then(Response=>
            Response.json()
                ).then(promise=>
                    this.setState({loading: false,value:promise})

                )
               
        .catch(error=>this.setState({loading: false,error: error.message}));
    }
    handelSubmitComment=(comment,name)=>{
        let day = new Date();
        let month = day.getMonth()+1;
        let time =day.getFullYear() +'-'+month+'-'+day.getDate()
        let data={"name": name,"content":comment,"publishTime":time};
        let jsonData = JSON.stringify(data);
        let orginalValue = this.state.value;
        let textarea = document.querySelector(".comment-textarea");

         var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/commentList', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(jsonData);
        let thisObj = this; 
        request.onloadend = function(){
            let obj =JSON.parse(request.responseText) ;
            orginalValue.push(obj); 
            thisObj.setState({value:orginalValue});
            textarea.value = "";          
        }
        
    }
    render(){
        if(this.state.loading){
            return(<span>Loading...</span>)
        }else if(this.state.error!== null){
            return(<span>Error:{this.state.error}</span>)
        }else{
            const propsWithoutThePromise = dissoc(this.props,promiseProp);
            return <Warpped {...propsWithoutThePromise} {...this.state} handelSubmit={this.handelSubmitComment}/>;
        }
    }
}
class CommentContainer extends Component{
    render(){
        return <> <CommentList comments={this.props.value}/> <CommentForm handelSubmit={this.props.handelSubmit}/> </>
    }
}

export default Promised('comments',CommentContainer);