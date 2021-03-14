import React from 'react';
import './Table.css'
import {UserForm} from '../../utils/formUser';

type PropsType = {
    height?: string
    border?: string
    textAlign?: string
    backgroundColor?: string
    margin?: string
    user?: UserForm
}

export const FormTable = (props: PropsType) => {

    return <tr role={'row'} style={{
        height: `${props.height}`, backgroundColor: `${props.backgroundColor}`,
        border: `${props.border}`
    }}>
        <td role={'cell'} className={'table-cell'}
            style={{height: `${props.height}`, border: `${props.border}`}}>
            <span style={
                // @ts-ignore
                {textAlign: `${props.textAlign}`, margin: `${props.margin}`}}>
                {props.user?.surname ? props.user?.surname : 'Записи отсуствуют'}
            </span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.name ? props.user?.name : ''}</span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.sname ? props.user?.sname : ''}</span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.bdate ? props.user?.bdate : ''}</span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.identif ? props.user?.identif : ''}</span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.addressLast ? props.user?.addressLast : ''}</span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.ateAddress ? props.user?.ateAddress : ''}</span>
        </td>
        <td role={'cell'} className={'table-cell'}
            style={{border: `${props.border}`, height: `${props.height}`}}>
            <span>{props.user?.dsdDateRec ? props.user?.dsdDateRec : ''}</span>
        </td>
    </tr>
}