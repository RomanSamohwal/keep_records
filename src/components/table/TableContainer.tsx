import React from 'react';
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

       </div>
    </div>
}