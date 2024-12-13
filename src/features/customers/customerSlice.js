import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: "",
    nationalID: "",
    createdAt: "",
};

const customerSlice = createSlice({
    name:"customer",
    initialState,
    reducers:{
        createCustomer:{ 
            prepare(fullName, nationalID){
                return { payload: { fullName, nationalID } };
            }, 

            reducer(state, action){
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.createdAt = new Date().toISOString();
            }      
        }, 

        updateFullName(state, action){
            state.fullName = action.payload.fullName;
        }
    }
});


export default customerSlice.reducer;

export const { createCustomer, updateFullName } = customerSlice.actions;

