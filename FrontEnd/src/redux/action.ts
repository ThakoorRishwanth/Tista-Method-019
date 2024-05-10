import { ActionTypes, fetch_failure, fetch_request, fetch_success } from "./actionTypes";

interface State {
    loading: boolean;
    data: any[]; // Update the type as per your data structure
    error: boolean;
}

const initialState:State = {
    loading:false,
    data:[],
    error:false
}

export const actionReducer=(state=initialState,action: ActionTypes):State=>{
    switch(action.type){
        case fetch_request : return {...state, loading:true};
        case fetch_success : return {...state, loading: false, data:action.payload};
        case fetch_failure: return {...state, error:true};
        default:return state;
    }
}