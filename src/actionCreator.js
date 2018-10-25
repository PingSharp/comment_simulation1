import AppDispatcher from './AppDispatcher';
import ActionTypes from './ActionTypes';
const CommentActions = {
    loadComment(){
        AppDispatcher.dispatch({
            type: ActionTypes.LOAD_COMMENT,
        });
        fetch("http://localhost:3000/commentList").then(Response=>
        Response.json()
            ).then(promise=>{
                AppDispatcher.dispatch({
                    type: ActionTypes.LOAD_COMMENT_SUCCESS,
                    payload: {
                        comment: promise,
                    },
                });
            })           
    .catch(error=>{
        AppDispatcher.dispatch({
            type: ActionTypes.LOAD_COMMENT_ERROR,
            error: error,
        });
    });
    },
    addComment(comment,name){
        AppDispatcher.dispatch({
            type:ActionTypes.ADD_COMMENT,
        });
        let day = new Date();
        let month = day.getMonth()+1;
        let time =day.getFullYear() +'-'+month+'-'+day.getDate()
        let data={"name": name,"content":comment,"publishTime":time};
        let jsonData = JSON.stringify(data);
        let textarea = document.querySelector(".comment-textarea");

         var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/commentList', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(jsonData);
        request.onloadend = function(){
            textarea.value = ""; 
            fetch("http://localhost:3000/commentList").then(Response=>
            Response.json()
                ).then(promise=>{
                    AppDispatcher.dispatch({
                        type: ActionTypes.ADD_COMMENT_SUCCESS,
                        payload: {
                            comment: promise,
                        },
                    });
                })           
        .catch(error=>{
            AppDispatcher.dispatch({
                type: ActionTypes.LOAD_COMMENT_ERROR,
                error: error,
            });
        });         
        }
        
    }
}
export default CommentActions;