import React from 'react';
import { TableContainer } from './TableContainer';
import './Table.css'
import { PrimeIcons } from 'primereact/api';

export const ResultSearchComponent = () => {
    return <div className={'container-result'}>
        <div className={'header-result'}>
           <div className={'result-icon'}>
            <div className={'result-item'}>
                <i className="pi pi-search" style={{'fontSize': '10px'}}></i>
            </div>
            <div className={'result-item'}>
                Поиск
            </div>
           </div>
        </div>
        <div style={{backgroundColor: 'white', padding: '8px 14px'}}>
            <TableContainer/>
        </div>

    </div>
}