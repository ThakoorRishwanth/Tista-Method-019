import { ACTION, Fetch_Failure, Fetch_Request, Fetch_Success } from "./actionTypes";


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

export const WomenReducer=(state=initialState,action: ACTION):State=>{
    switch(action.type){
        case Fetch_Request : return {...state, loading:true};
        case Fetch_Success : return {...state, loading: false, data:action.payload};
        case Fetch_Failure: return {...state, error:true};
        default:return state;
    }
}