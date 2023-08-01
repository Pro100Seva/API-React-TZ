import React from 'react';
import { User } from './type/type';

function UserItem({ user }: { user: User }): JSX.Element {
  return (
    <li>
      <a href={user.html_url}>
        <img src={user.avatar_url} alt="" style={{ width: '250px' }} />
        <p>{user.login}</p>
      </a>
    </li>
  );
}

export default UserItem;
