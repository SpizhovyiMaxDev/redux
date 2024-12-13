import { combineReducers } from "redux";

import accountReducer from "./features/accounts/accountSlice";

export const store = combineReducers({
    reducer:{
        account: accountReducer,
        // customer: customerReducer,
    }
});