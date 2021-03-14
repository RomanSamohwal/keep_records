import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiUsers, getUserParam} from '../api/api';
import {formUsers, UserForm} from '../utils/formUser';
import {setAppError, setAppStatus} from './app-reducer';

export const getSelectedUser = createAsyncThunk(
    'users/getSelectedUser',
    async (param: getUserParam, thunkAPI) => {
        try {
            thunkAPI.dispatch(setAppStatus({status: 'loading'}))
            const response = await ApiUsers.getUsers(param.identif, param.surname,
                param.name, param.patronymic, param.doc_series, param.doc_num)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            const users = formUsers(response.data)
            return {users}
        } catch (e) {
            thunkAPI.dispatch(setAppError({error: String(e)}))
            return thunkAPI.rejectWithValue(null)
        }
    });

const slice = createSlice({
    name: 'users',
    initialState: [] as Array<UserForm>,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSelectedUser.fulfilled, (state, action) => {
            return action.payload.users
        })
    }
})

export const userReducer = slice.reducer
