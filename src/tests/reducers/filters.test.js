import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
})

test('should set SORT BY to AMOUNT', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})


test('should set SORT BY to DATE', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }

  const action = { type: 'SORT_BY_DATE' };

  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date')
})

test('should set SET TEXT FILTER', () => {
  const text = 'food'
  const action = { type: 'SET_TEXT_FILTER', text };

  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text)
})

test('should set SET_START_DATE FILTER', () => {
  const startDate = moment().startOf('month');
  const action = { type: 'SET_START_DATE', startDate};

  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate)
})

test('should set SET SET_END_DATE FILTER', () => {
  const endDate = moment().endOf('month')
  const action = { type: 'SET_END_DATE', endDate};

  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate)
})
