import React, {ChangeEvent, useEffect, useState} from 'react';
import {PaginatorDemo} from '../paginator/PaginatorComponent';
import {TableComponent} from "./TableComponent";
import './TableContainer.css'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {UserForm} from '../../utils/formUser';

export const TableContainer = () => {
    const data: Array<UserForm> | any = useSelector<AppRootStateType>(state => state.users)

    useEffect(() => {
        setTotalCount(data.length)
    }, [data])

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