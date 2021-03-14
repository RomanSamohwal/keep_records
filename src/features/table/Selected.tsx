import React from 'react';

export const Selected = (props: any) => {
    return <div className={'select'}>
        <select onChange={props.onSelectHandler} value={props.value}>
            <option>15</option>
            <option>20</option>
            <option>25</option>
        </select>
    </div>
}