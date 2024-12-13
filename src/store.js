import { combineReducers } from "redux";

import { accountSlice } from "./features/accounts/accountSlice";

export const store = combineReducers({
    reducer:{
        account: accountSlice,
        // customer: customerReducer,
    }
});