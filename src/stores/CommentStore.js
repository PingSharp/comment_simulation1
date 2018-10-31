import {createStore} from 'redux';
import reducer from '../Reducer';

const initValues = {
    'comment':[{
        "id": 1,
        "name": "cam",
        "content": "It's good idea!",
        "publishTime": "2018-07-15"
      },
      {
        "id": 2,
        "name": "Tom",
        "content": "Not bad.",
        "publishTime": "2018-07-19"
      },
      {
        "name": "Lucy",
        "content": "super!",
        "publishTime": "2018-10-23",
        "id": 3
      }],
}
const CommentStore = createStore(reducer,initValues);
/* let comment = [];
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
}) */
 export default CommentStore;
