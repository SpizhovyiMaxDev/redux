import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './features/accounts/accountSlice';
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountsReducer, 
    customer: customerReducer
  },
});

export default store;
