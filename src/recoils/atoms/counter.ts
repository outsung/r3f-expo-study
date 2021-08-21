import { atom } from 'recoil';

export const CounterAtom = atom<number>({
  key: 'counter',
  default: 0,
});
