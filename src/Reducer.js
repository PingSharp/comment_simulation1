import ActionTypes from './ActionTypes';

export default (state,action) =>{
    const { payload} = action;

    switch(action.type){
        case ActionTypes.LOAD_COMMENT_SUCCESS:
        return{...state,comment:action.payload.comment};
        case ActionTypes.ADD_COMMENT_SUCCESS:
        return{...state,comment:action.payload.comment};
        default:
        return state;
    }
}