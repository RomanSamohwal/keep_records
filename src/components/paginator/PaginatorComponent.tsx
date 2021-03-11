import React, {useState} from 'react';
import {Paginator} from 'primereact/paginator';
import './PaginatorDemo.css';

export const PaginatorDemo = (props: any) => {
    const [contentFirst, setContentFirst] = useState(0);

    const onContentPageChange = (event: any) => {
       /* setContentFirst(event.first);*/
       props.onChangeCurrentPage(event.first)
    }



    return (
        <div>
            <Paginator first={props.currentPage} rows={1} totalRecords={props.totalPages} onPageChange={onContentPageChange}
            className={'.p-paginator .p-paginator-first, .p-paginator .p-paginator-prev, .p-paginator .p-paginator-next, .p-paginator .p-paginator-last'}
                       template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
            </Paginator>
        </div>
    );
}
