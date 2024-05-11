import { applyMiddleware, combineReducers, legacy_createStore, Store } from "redux";
import { actionReducer } from "./action";
import  {thunk}  from "redux-thunk"
import { cardReducer } from "./card";
import { WomenReducer } from "./women";
import { helmetReducer } from "./helmet";


export type RootState = ReturnType<typeof rootReducer>;

const rootReducer:any = combineReducers({
    pro : actionReducer,
    card : cardReducer,
    women : WomenReducer,
    helmet:helmetReducer
})

export const store:Store<RootState> = legacy_createStore(rootReducer, applyMiddleware(thunk)) 