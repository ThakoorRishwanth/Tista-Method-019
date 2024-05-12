
import { Actions, Fetch_Fail, Fetch_req, Fetch_succ } from "./actionTypes";


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

export const helmetReducer=(state=initialState,action: Actions):State=>{
    switch(action.type){
        case Fetch_req : return {...state, loading:true};
        case Fetch_succ : return {...state, loading: false, data:action.payload};
        case Fetch_Fail: return {...state, error:true};
        default:return state;
    }
}