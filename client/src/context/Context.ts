import { createContext } from 'react';
// импортируем тип Context
import { Context } from './type';
// импортируем исходное состояние
import { initState } from '../reducer/reducer';

const initailContext: Context = {
  state: initState,
  dispatch: () => {},
  fetchData: (): void => {},
  setName: () => {},
  setCount: () => {},
  setNumberPage: () => {},
};

// экспортируем контекст как сущность
export const stateContext = createContext(initailContext);
