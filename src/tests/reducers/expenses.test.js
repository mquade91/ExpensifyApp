import expensesReducer from '../../reducers/expenses';
import moment from 'moment'
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([])
})

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should NOT remove expenses if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should ADD an expense', () => {
  const newExpense = {
      id: '4',
      description: 'batteries',
      note: "",
      amount: 395,
      createdAt: 0,
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense,
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, newExpense])
})

test('should EDIT an expense', () => {
  const note = "new note on the GUM"
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { note },
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].note).toBe("new note on the GUM");
})

test('should NOT EDIT an expense no ID', () => {

  const note = "new note on the GUM"
  const action = {
    type: 'EDIT_EXPENSE',
    id:'-2',
    updates: { note },
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})



