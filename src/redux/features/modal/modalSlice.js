import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    isRegister: false,
}

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        loginToggle: (state) => {
            console.log(!(state.isLogin));
            state.isLogin = !(state.isLogin);
        },
        registerToggle: (state) => {
            console.log("register toggle");
        },
    }
})

export const {loginToggle, registerToggle} = modalSlice.actions;

export default modalSlice.reducer;