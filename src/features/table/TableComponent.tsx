import React from 'react';
import {UserForm} from '../../utils/formUser';
import './Table.css'
import {FormTable} from './FormTable';

export const TableComponent = React.memo((props: any) => {

    const title = ['Фамилия',
                   'Имя',
                   'Отчество',
                   'Дата рождения',
                   'Идентификационный номер',
                   'Адрес регистрации (после конвертации)',
                   'Адрес регистрации (коды ATE и TE)',
                   'Дата регистрации']

    const ArrayDate = props.data.length > 0
               ? props.data.map((user: UserForm) => (
                 <FormTable key={user.identif + Math.floor(Math.random() * Math.floor(1000))} user = {user}/>))
               : <FormTable backgroundColor={'#0000'} height={'auto'} margin={'5px'} textAlign={'left'} border={'none'}/>

    const headerTable = title.map((t) => {
        return <th key={t}  className='table-cell header' style={{backgroundColor: '#d9e8fc', height: '35px'}}>
            <span>{t}</span>
        </th>
    })

    return <div className={'p-datatable-wrapper'}>
        <table role={'grid'} className={'table'}>
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