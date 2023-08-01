import React, { useEffect, useReducer, useState } from 'react';
import './App.css';
import SearchInput from '../features/search/SearchInput';
import UsersList from '../features/users/UsersList';
import Pagination from '../features/pagination/Pagination';
import { stateContext } from '../context/Context';
import { initState, reducer } from '../reducer/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [name, setName] = useState('');
  const [count, setCount] = useState('desc');
  const [numberPage, setNumberPage] = useState(1);
  const fetchData = (): void => {
    fetch(
      `https://api.github.com/search/users?q=${name}&sort=repositories&order=${count}`,
      {
        headers: { 'X-GitHub-Api-Version': '2022-11-28' },
      }
    )
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'USERS_INIT', payload: data.items }));
  };

  useEffect(() => {
    if (name) {
      fetchData();
    }
  }, [count]);

  const countRepos = 10;

  const lastIndexRepos = countRepos * numberPage;
  const firstIndexRepos = lastIndexRepos - countRepos;
  const currentPageRepos = Array.isArray(state.users)
    ? state.users.slice(firstIndexRepos, lastIndexRepos)
    : [];

  return (
    <stateContext.Provider
      value={{ state, dispatch, fetchData, setName, setCount, setNumberPage }}
    >
      <div className="App">
        <SearchInput />
        <UsersList currentPageRepos={currentPageRepos} />
        <Pagination countRepos={countRepos} />
      </div>
    </stateContext.Provider>
  );
}

export default App;
