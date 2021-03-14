import {addressLast, User} from '../api/api';
import moment from 'moment'

export const formUsers = (data: any) => {
    return data.map((u: any) => formUser(u))
}

const formUser = (user: User): UserForm => {
    return {
        name: user.name,
        surname: user.surname,
        sname: user.sname,
        identif: user.identif,
        addressLast: formAddressLast(user.addressLast),
        ateAddress: user.ateAddress,
        bdate: formDate(user.bdate),
        dsdDateRec: user.dsdDateRec
    }
}

export const formDate = (date: string) => {
    return moment(date).format('yyyy-MM-DD')
}

const formAddressLast = (data: addressLast) => {
    return compareValue(data.areaL) +
        compareValue(data.areaObjNum) +
        compareValue(data.regionL) +
        compareValue(data.villageCouncil) +
        compareValue(data.vilCouncilObjNum) +
        compareValue(data.typeCityL) +
        compareValue(data.cityL) +
        compareValue(data.typeStreetL) +
        compareValue(data.streetL)  +
        compareValue(data.house) +
        compareValue(data.korps) +
        compareValue(data.app)
}

const compareValue = (value: string) => value ?  value + ' ' : ''

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
