import {atom, useRecoilState} from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { persistAtomEffect } from './persistAtomEffect'

const localStorage = typeof window !== `undefined` ? window.localStorage : null


export const cartState = atom({
    key: "cartState",
    default: [],
    effects_UNSTABLE: [persistAtomEffect],
})