import React from 'react';
import './Sidebar.css'
import {SideBarHeader} from './SidebarHeader';
import {SidebarInputData} from './SidebarInput';
import {ButtonComponent} from '../../components/button/Button';
import {useFormik} from 'formik';
import {getUserParam} from "../../api/api";
import {UserForm} from "../../utils/formUser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import { getSelectedUser } from '../../bll/users-reducer';

export const SidebarComponent = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {} as getUserParam,
        validate: validate,
        onSubmit: (values: getUserParam) => {
            dispatch(getSelectedUser(values))
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
                    <div className="input-item input-passport">
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

let validate = (values: getUserParam) => {
    if (!values.name) {
        return {}
    }
}

