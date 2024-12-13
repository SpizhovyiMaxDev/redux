import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
}


const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        deposit(state, action){
            state.balance += action.payload;
        },

        withdraw(state, action){
            state.balance -= action.payload;
        },

        requestLoan: {
            prepare(amount, purpose){
                return { payload:{ amount, purpose } }
            },

            reducer(state, action){
                if(state.loan > 0) return state;
                state.loan = action.payload.amount;
                state.balance += action.payload.amount;
                state.loanPurpose = action.payload.purpose;
            }
        },

        payLoan(state){
            state.loanPurpose = "";
            state.balance -= state.loan;
            state.loan = 0;
        }
    }
});


export default accountSlice.reducer;

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
