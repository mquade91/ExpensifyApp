import getExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([])
  expect(total).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const total = getExpensesTotal([expenses[1]])
  expect(total).toEqual(109500);
});


test('should correctly add up a multiple expenses', () => {
  const total = getExpensesTotal(expenses)
  expect(total).toEqual(114195);
});