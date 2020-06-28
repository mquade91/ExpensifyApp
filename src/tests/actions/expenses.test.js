import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  })
})

test('should edit expense', () => {
  const action = editExpense('editNote', { note: 'newNoteValue' }
  );

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'editNote',
    updates: {
      note: 'newNoteValue',
    }
  })
})

test('should set up add expense with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this was last months rent'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    }
  })
})


test('should set up add expense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})