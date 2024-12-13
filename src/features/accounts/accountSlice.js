import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isConvertingCurrency: false,
}


const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        deposit(state, action){
            state.balance += action.payload;
            state.isConvertingCurrency = false;
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
        },
        
        convertingCurrency(state){
            state.isConvertingCurrency = true;
        }
    }
});

export function deposit(amount, currency){
    if(currency === "USD"){
        return { type: "account/deposit", payload: amount }
    }
    
    return async function (dispatch, getState){
       dispatch({ type:"account/convertingCurrency" });
       const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);

       if(!response.ok) 
            throw new Error("The server failed converting the currency."); 

       const data = await response.json();
       const converted = data.rates.USD;
       console.log(converted)

       dispatch({ type: "account/deposit", payload: converted });
    }
}

export default accountSlice.reducer;

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
