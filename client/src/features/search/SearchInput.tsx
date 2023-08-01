import React, { useContext } from 'react';
import { stateContext } from '../../context/Context';

function SearchInput(): JSX.Element {
  const { setName, setCount, fetchData } = useContext(stateContext);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const handleCount = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCount(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        onChange={handleSearch}
      />
      <button type="button" onClick={fetchData}>
        Поиск
      </button>
      <div>
        <label htmlFor="count-select">По кол-ву репозиториев: </label>
        <select id="count-select" onChange={handleCount}>
          <option value="desc">По возрастанию</option>
          <option value="asc">По убыванию</option>
        </select>
      </div>
    </div>
  );
}

export default SearchInput;
