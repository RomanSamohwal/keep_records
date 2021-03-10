import React, {useState} from 'react';
import {Paginator} from 'primereact/paginator';
import './PaginatorDemo.css';

export const PaginatorDemo = () => {
    const [contentFirst, setContentFirst] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const onContentPageChange = (event: any) => {
        setContentFirst(event.first);
        /*setContentRows(event.rows);*/
    }

    return (
        <div>
            <Paginator first={contentFirst} rows={1} totalRecords={12} onPageChange={onContentPageChange}
            className={'.p-paginator .p-paginator-first, .p-paginator .p-paginator-prev, .p-paginator .p-paginator-next, .p-paginator .p-paginator-last'}
                       template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            </Paginator>
        </div>
    );
}
