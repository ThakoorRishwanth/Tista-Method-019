import { applyMiddleware, combineReducers, legacy_createStore, Store } from "redux";
import { actionReducer } from "./action";
import  {thunk}  from "redux-thunk"

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer:any = combineReducers({
    pro : actionReducer
})

export const store:Store<RootState> = legacy_createStore(rootReducer, applyMiddleware(thunk)) 