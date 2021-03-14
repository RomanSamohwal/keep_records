import React from 'react';
import {UserForm} from '../../utils/formUser';
import './Table.css'

export const TableComponent = React.memo((props: any) => {

    const title = ['Фамилия', 'Имя', 'Отчество',
        'Дата рождения', 'Идентификационный номер',
        'Адрес регистрации (после конвертации)',
        'Адрес регистрации (коды ATE и TE)',
        'Дата регистрации'
    ]
    const ArrayDate = props.data.length > 0 ? props.data.map((user: UserForm) => (
            <tr role={'row'} key={user.identif + Math.floor(Math.random() * Math.floor(1000))}>
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
    ) : <tr role={'row'} style={{backgroundColor: "white", height: 'auto', padding: '10px'}} className={'table-cell'}>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span>Записи отсуствуют</span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
        <td role={'cell'} className={'table-cell'} style={{height: 'auto'}}><span></span></td>
    </tr>


    const headerTable = title.map((t) => {
        return <th key={t}  className='table-cell header' style={{backgroundColor: '#d9e8fc', height: '35px'}}>
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
})