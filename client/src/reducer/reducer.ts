import { State } from './type';
import { Action } from './action';

export const initState: State = { users: [], error: '' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'USERS_INIT':
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
