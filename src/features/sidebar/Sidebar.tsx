import React from 'react';
import './Sidebar.css'
import {SideBarHeader} from './SidebarHeader';
import {SidebarInputData} from './SidebarInput';
import {ButtonComponent} from '../../components/button/Button';
import {useFormik} from 'formik';
import {getUserParam} from '../../api/api';
import {useDispatch} from 'react-redux';
import {getSelectedUser} from '../../bll/users-reducer';
import { setAppMessage } from '../../bll/app-reducer';

const message = "Заполните поле '№ паспорта' или 'Фамилия' или 'Идентификационный номер'"

export const SidebarComponent = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {} as getUserParam,
        onSubmit: (values: getUserParam) => {
            if (values.surname || values.identif || values.doc_num) {
                dispatch(getSelectedUser(values))
            } else {
               dispatch(setAppMessage({message: message}))
            }
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <div className={'container-sidebar'}>
            <div className={'p-sidebar p-component p-sidebar-left p-sidebar-active'}>
                <SideBarHeader/>
                <div className='input-container'>
                    <SidebarInputData id={'surname'} name = {'surname'} onChange={formik.handleChange}
                                      value={formik.values.surname} title={'Фамилия'}
                                      placeholder={'ВВЕДИТЕ ФАМИЛИЮ'} width={'155px'}/>
                    <SidebarInputData id={'name'} name={'name'} onChange={formik.handleChange}
                                      value={formik.values.name}
                                      title={'Имя'} placeholder={'ВВЕДИТЕ ИМЯ'} width={'155px'}/>
                    <SidebarInputData id={'patronymic'} name={'patronymic'} onChange={formik.handleChange}
                                      value={formik.values.patronymic}
                                      title={'Отчество'} placeholder={'ВВЕДИТЕ ОТЧЕСТВО'} width={'155px'}/>
                    <SidebarInputData id={'identif'} name={'identif'} onChange={formik.handleChange}
                                      value={formik.values.identif}
                                      title={'Идентификационный номер'} placeholder={'ВВЕДИТЕ НОМЕР'} width={'155px'}/>
                    <div className='input-item input-passport'>
                        <SidebarInputData id={'doc_series'} name={'doc_series'} onChange={formik.handleChange}
                                          value={formik.values.doc_series}
                                          title={'Серия'} placeholder={''} width={'44px'}/>
                        <SidebarInputData id={'doc_num'} name={'doc_num'} onChange={formik.handleChange}
                                          value={formik.values.doc_num}
                                          title={'№ паспорта'} placeholder={''} width={'103px'}/>
                    </div>
                    <ButtonComponent type = {'submit'}/>
                </div>
            </div>
        </div>
    </form>
}
