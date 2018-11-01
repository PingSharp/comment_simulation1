import ActionTypes from './ActionTypes';

const CommentActions = {
    loadComment(){
        return(dispatch,getState) =>{
       fetch("http://localhost:3000/commentList").then(res=>res.json()).then(promise=>{
           console.log(promise);
               dispatch({
                    type: ActionTypes.LOAD_COMMENT_SUCCESS,
                    payload: {
                        comment: promise,
                    },})
                
            })           
    .catch(error=>{
        dispatch({
            type: ActionTypes.LOAD_COMMENT_ERROR,
            error: error,
        })
    });
     } },
     addComment(comment,name){
         return(dispatch,getState)=>{
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
                    dispatch({
                        type: ActionTypes.ADD_COMMENT_SUCCESS,
                        payload: {
                            comment: promise,
                        },
                    });
                })           
        .catch(error=>{
            dispatch({
                type: ActionTypes.LOAD_COMMENT_ERROR,
                error: error,
            });
        });         
        }}
        
}
}
export default CommentActions;