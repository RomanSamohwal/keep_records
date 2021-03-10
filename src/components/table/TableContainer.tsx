import React from 'react';
import {PaginatorDemo} from '../paginator/PaginatorComponent';
import {TableComponent} from "./TableComponent";

export const TableContainer = () => {
    return <div className={'container'}>
        <div className={'box-upper'}>
            <div>
                Результат поиска
            </div>
        </div>
        <TableComponent/>
        <div className={'box-lower'}>
            <div className={'select'}>
                <select>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                </select>
            </div>
            <div>
                <PaginatorDemo/>
            </div>
        </div>
    </div>
}