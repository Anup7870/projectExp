import { createSlice } from "@reduxjs/toolkit";

const defTheme = localStorage.getItem('theme') ? localStorage.getItem('theme')==='dark' : true; 
export const themeSlice = createSlice({
    name:'theme',
    initialState:{
        darkTheme: defTheme
    },
    reducers:{
        toggleTheme: (state)=>{
            state.darkTheme = !state.darkTheme;
            localStorage.setItem('theme',state.darkTheme ? 'dark' : 'light')
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;