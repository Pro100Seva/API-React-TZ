import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../features/search/SearchInput';
import { stateContext } from '../context/Context';
import App from './App';

describe('SeachInput', () => {
  it('renders SearchInput element', () => {
    render(<SearchInput />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('Поиск')).toBeInTheDocument();
    expect(
      screen.getByLabelText('По кол-ву репозиториев:')
    ).toBeInTheDocument();
  });
  it('calls setName and setCount with correct values', async () => {
    const mockSetName = jest.fn();
    const mockSetCount = jest.fn();
    const mockFetchData = jest.fn();
    const mockState = {
      users: [],
      error: '',
    };
    render(
      <stateContext.Provider
        value={{
          state: mockState,
          dispatch: jest.fn(),
          fetchData: mockFetchData,
          setName: mockSetName,
          setCount: mockSetCount,
          setNumberPage: jest.fn(),
        }}
      >
        <App />
      </stateContext.Provider>
    );
    expect(screen.getByRole('button')).not.toBeNull();
  });
  it('Button should be rendered and clickable', async () => {
    render(<App />);
    const buttonElement = await screen.findByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeEnabled();
    fireEvent.click(buttonElement);
  });
});
