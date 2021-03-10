import React, {useEffect, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';

export const DataTablePaginatorDemo = () => {
    let data = [
        {
            id: 1000,
            name: "James Butt",
            country: {
                name: "Algeria",
                code: "dz"
            }
        }]

    const [customers3, setCustomers3] = useState([data]);
    const [first2, setFirst2] = useState(0);
    const [rows2, setRows2] = useState(10);

    const onCustomPage2 = (event) => {
        setFirst2(event.first);
        setRows2(event.rows);
    }

    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <>
                    <span className="p-mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />
                </>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };

    return (
        <div>
            <div className="card">
                <DataTable value={customers3} paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2}
                           paginatorClassName="p-jc-end" className="p-mt-6" style={{width: '1583px'}}>
                    <Column field="name" header="Фамилия"></Column>
                    <Column field="country.name" header="Имя"></Column>
                    <Column field="company" header="Отчество"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                </DataTable>
            </div>
        </div>
    );
}

