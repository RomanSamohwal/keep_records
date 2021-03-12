import React from 'react';
import './Sidebar.css'
import {SideBarHeader} from './SidebarHeader';
import {SidebarInputData} from './SidebarInput';
import {ButtonComponent} from '../../components/button/Button';

export const SidebarComponent = () => {

    return (<div className={'container-sidebar'}>
            <div className={'p-sidebar p-component p-sidebar-left p-sidebar-active'}>
                <SideBarHeader/>
                <div className='input-container'>
                    <SidebarInputData title={'Фамилия'} placeholder={'ВВЕДИТЕ ФАМИЛИЮ'} width={'155px'}/>
                    <SidebarInputData title={'Имя'} placeholder={'ВВЕДИТЕ ИМЯ'} width={'155px'}/>
                    <SidebarInputData title={'Отчество'} placeholder={'ВВЕДИТЕ ОТЧЕСТВО'} width={'155px'}/>
                    <SidebarInputData title={'Идентификационный номер'} placeholder={'ВВЕДИТЕ НОМЕР'} width={'155px'}/>
                    <div className="input-item input-passport">
                        <SidebarInputData title={'Серия'} placeholder={''} width={'44px'}/>
                        <SidebarInputData title={'№ паспорта'} placeholder={''} width={'103px'}/>
                    </div>
                    <ButtonComponent/>
                </div>
            </div>
        </div>
    )
}
