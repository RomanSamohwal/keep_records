import React, {useEffect, useState} from 'react';
import './Table.css'
import {UserType} from "../../api/api";

export const TableComponent = () => {
    const title = ['Фамилия', 'Имя', 'Отчество',
        'Дата рождения', 'Идентификационный номер',
        'Адрес регистрации (после конвертации)',
        'Адрес регистрации (коды ATE и TE)',
        'Дата регистрации'
    ]

    const data: Array<UserType> = [{
        surname: 'Самохвал', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },
        {surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
    }, {surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        }, {surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        }, {surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        }, {surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        },
        {surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        },{surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        },{surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        },{surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        },{surname: 'Самохвал', bdate: '06232', ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Самохвал', dsdDateRec: 'sdsdsd', identif: '12132332413'
        }
    ]

    const ArrayDate = data.map((user) => (
            <tr role={'row'} key={user.identif}
                style={{backgroundColor: 'white', height: '23px', fontWeight: 500, fontSize: '10px'}}>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                       <div>
                           {user.surname}
                       </div>
                    </div>
                </td>
                <td role={'cell'}>
                   <div style={{display: "flex", justifyContent: "center"}}>
                      <div>
                          {user.name}
                      </div>
                   </div>
                </td>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {user.sname}
                        </div>
                    </div>
                </td>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {user.bdate}
                        </div>
                    </div>
                </td>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {user.identif}
                        </div>
                    </div>
                </td>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {user.addressLast}
                        </div>
                    </div>
                </td>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {user.ateAddress}
                        </div>
                    </div>
                </td>
                <td role={'cell'}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            {user.dsdDateRec}
                        </div>
                    </div>
                </td>
            </tr>
        )
    )

    console.log(ArrayDate)

    const headerTable = title.map((t) => {
        return <th style={{
            width: '198px',
            height: '38px',
            backgroundColor: '#d9e8fc',
            border: '1px solid #d8d8d8',
            fontWeight: 500,
            fontSize: '10px'
        }}>
            <span className={'p-column-title'}>{t}</span>
        </th>
    })

    console.log(headerTable)

    return <div/* className={'p-datatable p-component p-mt-6'}*/>
        <div className={'p-datatable-wrapper'}>
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
    </div>
}