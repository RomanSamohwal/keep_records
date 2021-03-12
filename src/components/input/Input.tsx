import React, {useState} from 'react';
import {InputText} from 'primereact/inputtext';

export const InputComponent = (props: any) => {
    const [value1, setValue1] = useState('');

    return (
        <div>
            <InputText style={{margin: 0, padding: 0, width: `${props.width}`, height: '18px', fontSize: '0.8rem'}} value={value1}
                       onChange={(e) => setValue1(e.currentTarget.value)}
                       placeholder={props.placeholder}/>
        </div>
    )
}

//width: 196px height: 22px