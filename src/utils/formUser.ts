import {User} from "../api/api";
import moment from 'moment'

export const formUser = (data: User) : UserForm => {
    return {
        name : data.name,
        surname: data.surname,
        sname: data.sname,
        identif: data.identif,
        addressLast: 'address',
        ateAddress: data.ateAddress,
        bdate:  formDate(data.bdate),
        dsdDateRec: 'saas'
    }
}

export const formDate = (date: string) => {
    return moment(date).format('yyyy-MM-DD')
}


export type UserForm = {
    surname: string
    name: string
    sname: string
    bdate: string
    identif: string
    addressLast: string
    ateAddress: string
    dsdDateRec: any
}