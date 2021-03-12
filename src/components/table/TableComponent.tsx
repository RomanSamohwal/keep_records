import React from 'react';
import './Table.css'
import {UserType} from "../../api/api";

export const TableComponent = (props: any) => {

    const title = ['Фамилия', 'Имя', 'Отчество',
        'Дата рождения', 'Идентификационный номер',
        'Адрес регистрации (после конвертации)',
        'Адрес регистрации (коды ATE и TE)',
        'Дата регистрации'
    ]

  const ArrayDate = props.data.map((user: UserType) => (
            <tr role={'row'} key={user.identif}>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.surname}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.name}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.sname}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.bdate}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.identif}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.addressLast}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span> {user.ateAddress}</span>
                </td>
                <td role={'cell'} className={'table-cell'}>
                    <span>{user.dsdDateRec}</span>
                </td>
            </tr>
        )
    )

    const headerTable = title.map((t) => {
        return <th className={'table-cell header'} style={{backgroundColor: '#d9e8fc'}}>
            <span>{t}</span>
        </th>
    })

    return <div className={'p-datatable-wrapper'}>
        <table role={'grid'} style={{borderSpacing: 0}}>
            <thead className={'p-datatable-thead'}>
            <tr role={'row'}>
                {headerTable}
            </tr>
            </thead>
            <tbody className={'p-datatable-tbody'}>
            {ArrayDate}
            </tbody>
        </table>
    </div>
}