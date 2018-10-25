import {EventEmitter} from 'events';
import assign from 'object-assign';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../ActionTypes';

let comment = [];
function loadComment(newComment){
    comment = newComment;
}

const CommentStore = assign({},EventEmitter.prototype,{
    getComment(){
        return comment;
    },
    emitChange(){
        this.emit('change');
    },
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener(callback);
    }
});
AppDispatcher.register((action)=>{
    switch (action.type){
        case ActionTypes.LOAD_COMMENT_SUCCESS:{
            comment = action.payload.comment;
            CommentStore.emitChange();
        }
        case ActionTypes.ADD_COMMENT_SUCCESS:{
            comment = action.payload.comment;
            CommentStore.emitChange();
        }
    }
})
 export default CommentStore;
