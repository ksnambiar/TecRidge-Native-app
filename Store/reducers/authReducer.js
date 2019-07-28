import {SET_CURRENT_USER} from '../actions/types';

const initialState={
    isAuthenticated:false,
    utype:"",
    user:{}
}
export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:action.payload?true:false,
                utype:action.payload.utype,
                user:action.payload
            }
        default:
            return state;
    }
}