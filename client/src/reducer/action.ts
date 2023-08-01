import { User } from '../features/users/type/type';

export type Action = {
  type: 'USERS_INIT';
  payload: User[];
};
