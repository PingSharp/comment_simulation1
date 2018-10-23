import React,{Component} from 'react';
import CommentList from './commentList';

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
    render(){
        if(this.state.loading){
            return(<span>Loading...</span>)
        }else if(this.state.error!== null){
            return(<span>Error:{this.state.error}</span>)
        }else{
            const propsWithoutThePromise = dissoc(this.props,promiseProp);
            return <Warpped {...propsWithoutThePromise} {...this.state}/>;
        }
    }
}
class CommentContainer extends Component{
    render(){
        return <CommentList comments={this.props.value}/>
    }
}

export default Promised('comments',CommentContainer);