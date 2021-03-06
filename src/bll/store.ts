import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';
import { userReducer } from './users-reducer';

const rootReducer = combineReducers(
    {
        app: appReducer,
        users: userReducer
    }
)

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>