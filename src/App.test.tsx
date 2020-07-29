import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';

test('validate add method', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const addButton = getByTestId('add-button');
  const addInput = getByTestId('add-input');
  const list = getByTestId('list-show');

  expect(addButton).toBeInTheDocument();
  expect(addInput).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(list.childNodes).toHaveLength(1);

  fireEvent.change(addInput, {
    target: {
      value: 'Alex'
    }
  });
  fireEvent.click(addButton);

  expect(list.childNodes).toHaveLength(2);

  const newChild = getByTestId(`list-item-alex`);
  expect(newChild).toBeInTheDocument();
  expect(newChild.parentElement === list).toBe(true);
  expect(newChild).toHaveTextContent('Alex');
});
