import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        logged: false,
        name: 'Divyanshu Naugai',
        college: 'BTKIT Dwarahat',
    },
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            if (email === 'qaz@gmail.com') {
                if (password === 'qwerty') {
                    state.logged = true;
                }
            }
        },
        logout: (state) => {
            state.logged = false;
        }
    }
})

export const { login } = userSlice.actions;
export const { logout } = userSlice.actions;
export default userSlice.reducer;