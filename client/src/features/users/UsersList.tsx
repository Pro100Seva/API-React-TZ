import React from 'react';
import UserItem from './UserItem';
import { User } from './type/type';

function UsersList({
  currentPageRepos,
}: {
  currentPageRepos: User[];
}): JSX.Element {
  return (
    <ul style={{ listStyle: 'none' }}>
      {currentPageRepos?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
