import React from 'react';
import {TopBar} from '../../components/topbar/Topbar';
import './Main.css'
import {SidebarComponent} from "../../features/sidebar/Sidebar";
import {ResultSearchComponent} from '../../components/table/ResultSearchComponent';

export const Main = () => {
    return <div className={'main-container'}>
        <TopBar/>
        <div style={{minWidth: '100%', display: "flex", alignItems: "center", justifyContent: "space-between" ,paddingTop: '60px', paddingRight: '25px'}}>
            <SidebarComponent/>
            <ResultSearchComponent/>
        </div>
    </div>
}

