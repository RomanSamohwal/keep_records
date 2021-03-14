import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://a.todes.by:13555/data-service-test/api/v1/'
})

export const ApiUsers = {
    getUsers: async (identif: number | string = '', surname: string = '', name : string = '',
                     patronymic: string = '', doc_series: number | string = '', doc_num : number | string = '') => {
        return await instance.get(`data?sys_organ=26&identif=${identif}&surname=${surname}&name=${name}&patronymic=${patronymic}&doc_series=${doc_series}&doc_num=${doc_num}`)
    }
}

export type getUserParam = {
    identif?: number,
    name?: string,
    surname?: string,
    patronymic?: string,
    doc_series?: string,
    doc_num?: number
}
export type User = {
    pid: number
    identif: string
    view: {
        klUniPK: {
            type: number
            code: number
        }
        lex1: string
        lex2: any
        lex3: any
        dateBegin: any
        active: boolean
    }
    sysDocType: {
        klUniPK: {
            "type": number
            "code": number
        },
        "lex1": string
        "lex2": any
        "lex3": any
        "dateBegin": any
        "active": boolean
    },
    surname: string
    name: string
    sname: string
    sex: {
        klUniPK: {
            type: number
            code: number
        },
        lex1: string
        lex2: any
        lex3: any
        dateBegin: any
        active: boolean
    },
    citizenship: {
        klUniPK: {
            type: number
            code: number
        },
        lex1: string
        lex2: any
        lex3: any
        dateBegin: any
        active: boolean
    }
    sysOrgan: {
        klUniPK: {
            type: number
            code: number
        },
        lex1: string
        lex2: any
        lex3: any
        dateBegin: any
        active: boolean
    }
    bdate: string
    dsdDateRec: any
    docSery: any
    docNum: any
    regNum: any
    docDateIssue: any
    docAppleDate: any
    dateRec: any
    ateAddress: string
    expireDate: any
    aisPasspDocStatus: any
    identifCheckResult: number
    countryB: any
    areaB: any
    regionB: any
    typeCityB: any
    cityB: any
    docType: any
    docOrgan: any
    inputOldAddress: true
    contryL: any
    areaL: any
    regionL: any
    typeCityL: any
    cityL: any
    typeStreetL: any
    streetL: any
    house: any
    korps: any
    app: any
    organDoc: any
    workPlace: any
    workPosition: any
    docIssueOrgan: any
    surnameBel: any
    nameBel: any
    snameBel: any
    surnameEn: any
    nameEn: any
    areaBBel: any
    regionBBel: any
    cityBBel: any
    villageCouncil: any
    intracityRegion: any
    form19_20: {
        form19_20Base: string
        pid: any
        signAway: boolean
        countryPu: any
        areaPu: any
        regionPu: any
        cityPu: any
        datePu: any
        dateRegWhereComeFrom: any
        marks: any
        notes: any
        reason: any
        term: any
        dateRec: any
        typeCityPu: any
        typeStreetPu: any
        streetPu: any
        housePu: any
        korpsPu: any
        appPu: any
        dateReg: any
        termReg: any
        dateRegTill: any
        causeIssue: any
        deathDate: any
        signNoTake: boolean
        signNoReg: boolean
        signDestroy: boolean
        noAddrPu: any
        regType: any
        maritalStatus: any
        education: any
        student: boolean
        infants: any
    }
    dsdAddressLive: any
    getPassportDate: any
    images: any
    addressLast: {
        dsdAddressLiveBase: string
        pid: any
        areaL: string
        areaObjNum: any
        regionL: string
        regionObjNum: any
        villageCouncil: any
        vilCouncilObjNum: any
        typeCityL: string
        cityL: string
        typeStreetL: string
        streetL: string
        house: string
        korps: string
        app: string
        ateObjectNum: any
        ateElementUid: any
        ateAddrNum: any
    },
    status: any
}
export type addressLast = {
    dsdAddressLiveBase: string
    pid: any
    areaL: string
    areaObjNum: any
    regionL: string
    regionObjNum: any
    villageCouncil: any
    vilCouncilObjNum: any
    typeCityL: string
    cityL: string
    typeStreetL: string
    streetL: string
    house: string
    korps: string
    app: string
    ateObjectNum: any
    ateElementUid: any
    ateAddrNum: any
}