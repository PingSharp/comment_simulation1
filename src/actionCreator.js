import ActionTypes from './ActionTypes';

const CommentActions = {
    loadComment(){
       fetch("http://localhost:3000/commentList").then(Response=>
        Response.json()
            ).then(promise=>{
               return{
                    type: ActionTypes.LOAD_COMMENT_SUCCESS,
                    payload: {
                        comment: promise,
                    },}
                
            })           
    .catch(error=>{
        return{
            type: ActionTypes.LOAD_COMMENT_ERROR,
            error: error,
        }
    });
    },
    addComment (comment,name){                          
        return{
            type: ActionTypes.ADD_COMMENT,
            comment: comment,
            name:name
        }
    }
}
export default CommentActions;