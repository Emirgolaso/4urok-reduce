import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    users: [],
    isUsersLaodung: false,
    userError: '',
};

const userSlice = createSlice({
    initialState,
    name: 'UserSlice',
    reducers: {
        setUsers: (state, action) => {
            state.isUsersLaodung = false;
            state.users = action.payload;
        },
        setUsersError: (state, action) => {
            state.userError = action.payload;
            state.isUsersLaodung = false;
        },
        setUsersLaoding: (state) => {
            state.isUsersLaodung = true;
            state.users = [];
            state.userError = '';
        },
    },
});



const usersReduser = userSlice.reducer;
export default usersReduser;
export const { setUsers, setUsersError, setUsersLaoding } = userSlice.actions;