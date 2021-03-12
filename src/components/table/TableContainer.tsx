import React, {useEffect, useState} from 'react';
import {PaginatorDemo} from '../paginator/PaginatorComponent';
import {TableComponent} from "./TableComponent";

import { ChangeEvent } from 'react';
import './TableContainer.css'

export const TableContainer = () => {
    const data = [{
        surname: 'Самохвал', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Роман', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мизинец', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'ОЛьга', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Никитина', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Вероника', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    }, {
        surname: 'Владимиров', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Денис', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    },{
        surname: 'Мазовка', bdate: '06232'
        , ateAddress: 'wewewwe', name: 'Наташа', addressLast: 'Гатово', sname: 'Сергеевич',
        dsdDateRec: 'sdsdsd', identif: '12132332413'
    }
    ]

    useEffect(() => {
        setTotalCount(data.length)
    }, [data.length])

    const [pageSize, setPageSize] = useState(15)
    const [totalCount, setTotalCount] = useState(data.length)
    const [currentPage, setCurrentPage] = useState(0)

    let indexOfLastPost = (currentPage + 1) * pageSize
    let indexOfFirstPost = indexOfLastPost - pageSize
    let currentData = data.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil( totalCount/pageSize)

    const onChangeCurrentPage = (currentPage: any) => {
        setCurrentPage(currentPage)
    }

    const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.currentTarget.value))
    }

    return <div className={'container'}>
        <div className={'box-upper'}>
                <span>Результат поиска</span>
        </div>
        <TableComponent data = {currentData}/>
        <div className={'box-lower'}>
            <div className={'select'}>
                <select onChange={onSelectHandler} value={pageSize}>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                </select>
            </div>

                <PaginatorDemo totalPages ={totalPages}
                               currentPage = {currentPage}
                               onChangeCurrentPage = {onChangeCurrentPage}/>
        </div>
    </div>
}