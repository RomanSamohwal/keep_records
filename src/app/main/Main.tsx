import React from 'react';
import {TopBar} from '../../components/topbar/Topbar';
import './Main.css'
import {SidebarComponent} from '../../features/sidebar/Sidebar';
import {ResultSearchComponent} from '../../features/table/ResultSearchComponent';
import {Progress} from '../../common/loading/Loading';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../bll/store';

export const Main = () => {

    let status = useSelector<AppRootStateType>(state => state.app.status)
    if (status === 'loading') {
        return <Progress/>
    }

    return <div className={'main-container'}>
        <div className={'main-content'}>
            <TopBar/>
            <SidebarComponent/>
            <ResultSearchComponent/>
        </div>
    </div>
}

