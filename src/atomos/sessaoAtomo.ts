import {atom} from 'recoil'

export const sessaoAtomo = atom({
    key: "sessaoAtomo",
    default: {
        login: undefined,
        tipo: undefined,
        token: undefined
    }
})