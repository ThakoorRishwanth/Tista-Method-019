import { ACTIONS, FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./actionTypes";


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

export const cardReducer=(state=initialState,action: ACTIONS):State=>{
    switch(action.type){
        case FETCH_REQUEST : return {...state, loading:true};
        case FETCH_SUCCESS : return {...state, loading: false, data:action.payload};
        case FETCH_FAILURE: return {...state, error:true};
        default:return state;
    }
}