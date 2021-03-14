import React, {useRef} from 'react';
import {Toast} from 'primereact/toast';
import './ToastDemo.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {setAppError, setAppMessage} from '../../bll/app-reducer';

export const Messages = () => {

    const toast = useRef(null);

    let error = useSelector<AppRootStateType>(state => state.app.error)
    let message = useSelector<AppRootStateType>(state => state.app.message)

    const dispatch = useDispatch()

    const showInfo = () => {
        // @ts-ignore
        if (toast.current !== null) {
            // @ts-ignore
            toast.current.show({severity: 'info', summary: `message`, detail: `${message}`, life: 3000});
        }
        dispatch(setAppMessage({message: null}));
    }

    const showError = () => {
        // @ts-ignore
        if (toast.current !== null) {
            // @ts-ignore
            toast.current.show({severity: 'error', summary: `error`, detail: `${error}`, life: 3000});
        }
        dispatch(setAppError({error: null}));
    }

    if (error) {
        showError()
    }

    if (message) {
        showInfo()
    }

    return <div>
        <Toast ref={toast} position='bottom-center'/>
    </div>
}