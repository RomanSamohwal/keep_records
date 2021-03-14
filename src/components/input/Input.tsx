import React from 'react';
import {InputText} from 'primereact/inputtext';

export const InputComponent = (props: any) => {
    return (
        <div>
            <InputText style={{margin: 0, padding: 0, width: `${props.width}`, height: '18px', fontSize: '0.8rem'}}
                       id = {props.id} valus = {props.value} name = {props.name}
                       onChange={props.onChange} placeholder={props.placeholder}/>
        </div>
    )
}
