import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {PaginatorDemo} from '../../components/paginator/PaginatorComponent';
import {TableComponent} from './TableComponent';
import './TableContainer.css'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';
import {UserForm} from '../../utils/formUser';
import {Selected} from './Selected';

export const TableContainer = React.memo(() => {
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

    const totalPages = Math.ceil(totalCount / pageSize)

    const onChangeCurrentPage = useCallback((currentPage: number) => {
        setCurrentPage(currentPage)
    }, [])

    const onSelectHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.currentTarget.value))
    }, [])

    return <div className={'container'}>
        <div className={'box-upper'}>
            <span>Результат поиска</span>
        </div>
        <TableComponent data={currentData}/>
        <div className={'box-lower'}>
            <Selected onSelectHandler={onSelectHandler} value={pageSize}/>
            <PaginatorDemo totalPages={totalPages}
                           currentPage={currentPage}
                           onChangeCurrentPage={onChangeCurrentPage}/>
        </div>
    </div>
})