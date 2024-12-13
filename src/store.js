import { combineReducers } from "redux";

import accountReducer from "./features/accounts/accountSlice";

const store = combineReducers({
    reducer:{
        account: accountReducer,
        // customer: customerReducer,
    }
});

export default store