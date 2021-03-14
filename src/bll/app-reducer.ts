import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        message: null
    } as InitialStateType,
    reducers: {
        setAppError(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },
        setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppMessage(state, action: PayloadAction<{ message: string | null }>) {
            state.message = action.payload.message
        }
    }
})

export const appReducer = slice.reducer
export const {setAppError, setAppStatus, setAppMessage} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    status: RequestStatusType
    error: string | null,
    message: string | null
}
