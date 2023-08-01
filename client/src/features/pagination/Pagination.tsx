import React, { useContext } from 'react';
import { stateContext } from '../../context/Context';

function Pagination({ countRepos }: { countRepos: number }): JSX.Element {
  const { setNumberPage } = useContext(stateContext);
  const paginate = (numb: number): void => setNumberPage(numb);
  const { state } = useContext(stateContext);
  const countPage = [];

  for (let i = 1; i <= Math.ceil(state.users?.length / countRepos); i++) {
    countPage.push(i);
  }
  return (
    <ul
      className="pagination"
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {countPage.map((number) => (
        <li key={number} style={{ border: 'solid 1px black', width: '50px' }}>
          <a href="!#" onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
