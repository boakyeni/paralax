import { AtomEffect } from "recoil"
import { recoilPersist } from "recoil-persist"
import { atom, useSetRecoilState } from "recoil"

const ssrCompletedState = atom({
  key: "SsrCompleted",
  default: false,
})

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState)
  return () => setSsrCompleted(true)
}

const { persistAtom } = recoilPersist()

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param))
}
