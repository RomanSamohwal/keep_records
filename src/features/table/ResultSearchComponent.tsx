import React from 'react';
import {TableContainer} from './TableContainer';
import './ResultComponent.css'

export const ResultSearchComponent = () => {
    return <div className={'container-result'}>
        <div className={'header-result'}>
            <div className={'result-icon'}>
                <div className={'result-item'}>
                    <i className="pi pi-search" style={{'fontSize': '10px'}}/>
                </div>
                <div className={'result-item'}>
                    Поиск
                </div>
            </div>
        </div>
        <div style={{backgroundColor: 'white', padding: '10px'}}>
            <TableContainer/>
        </div>
    </div>
}