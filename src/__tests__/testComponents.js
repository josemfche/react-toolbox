import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App'
import { Provider } from 'react-redux'
import { store } from '../app/store'

afterEach(cleanup);

test('Render app with out crash', () => {
  render(
  <Provider store={store}>
      <App />
  </Provider>
  );
});

test('Have all components', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
        );
    const navBar = screen.getByTestId('navbar-1')
    expect(navBar).toBeInTheDocument()
    expect(navBar).toHaveTextContent('Get Data')

    const tableDisplay = screen.getByTestId('table-display')
    expect(tableDisplay).toBeInTheDocument()
    expect(tableDisplay).toBeVisible()
});