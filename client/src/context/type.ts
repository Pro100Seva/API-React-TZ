import { State } from '../reducer/type';

export type Context = {
  state: State;
  dispatch: Function;
  fetchData: () => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  setNumberPage: React.Dispatch<React.SetStateAction<number>>;
};
