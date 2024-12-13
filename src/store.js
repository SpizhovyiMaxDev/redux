import { configureStore } from '@reduxjs/toolkit';
import accountsReducer from './features/accounts';

const store = configureStore({
  reducer: {
    account: accountsReducer, 
  },
});

export default store;
