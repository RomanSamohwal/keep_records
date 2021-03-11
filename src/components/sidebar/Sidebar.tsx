import React from 'react';
import { ButtonComponent } from '../button/Button';
import {InputComponent} from '../input/Input';
import './Sidebar.css'

export const SidebarComponent = () => {

    return (
        <div className={'p-sidebar p-component p-sidebar-left p-sidebar-active'}
             style={{width: '240px', padding: '0'}}>
            <div className={'container-sidebar'}>
                <div className={'sidebar-header'}>
                    <div className={'container-title'}>
                        <div>Регистрационный</div>
                        <div>учет</div>
                    </div>
                    <div className={'circle'}>
                    </div>
                </div>

                <div className="input-container">
                    <div className="input-item">
                        <span>Фамилия</span>
                        <InputComponent placeholder={'ВВЕДИТЕ ФАМИЛИЮ'}
                                        width={'196px'}/>
                    </div>
                    <div className="input-item">
                        <span>Имя</span>
                        <InputComponent placeholder={'ВВЕДИТЕ ИМЯ'}
                                        width={'196px'}/>
                    </div>
                    <div className="input-item">
                        <span>Отчество</span>
                        <InputComponent placeholder={'ВВЕДИТЕ ОТЧЕСТВО'}
                                        width={'196px'}
                        />
                    </div>
                    <div className="input-item">
                        <span>Идентификационный номер</span>
                        <InputComponent placeholder={'ВВЕДИТЕ НОМЕР'}
                                        width={'196px'}
                        />
                    </div>

                    <div className="input-item input-passport">
                        <div>
                            <span>Серия</span>
                            <InputComponent placeholder={''}
                                            width={'57px'}/>
                        </div>
                        <div>
                            <span>№ паспорта</span>
                            <InputComponent placeholder={''}
                                            width={'127px'}/>
                        </div>
                    </div>
                    <ButtonComponent/>
                </div>

            </div>
        </div>
    )
}
