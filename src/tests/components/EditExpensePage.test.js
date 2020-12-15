import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, expense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[2]}
      startRemoveExpense={startRemoveExpense}
      editExpense={editExpense}
      history={history}
    />)
})

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
  expect(history.push).toHaveBeenCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);

})

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id,
  });
})