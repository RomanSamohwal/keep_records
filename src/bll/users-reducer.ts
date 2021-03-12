import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiUsers, User } from '../api/api';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (param  ,thunkAPI) => {
        try {
            const users = await ApiUsers.getUsers()
            return {users}
        } catch (e) {
             /* thunkAPI.dispatch(setAppStatus({status: 'failed'}))
              thunkAPI.dispatch(setAppError({error: String(e)}))*/
              return thunkAPI.rejectWithValue(null)
        }
    });

const slice = createSlice({
    name: 'users',
    initialState: [] as Array<User>,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.concat(action.payload.users)
        }
    )}
})

export const userReducer = slice.reducer
export const {} = slice.actions


