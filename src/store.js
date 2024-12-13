import { combineReducers } from "redux";


const store = combineReducers({
    reducer:{
        account: accountReducer,
        customer: customerReducer,
    }
});