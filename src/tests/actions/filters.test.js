import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  })
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  })
});
//////////////////////////////////////////////

test('should generate setTextFilter action object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  })
});

test('should generate settextFilter default prop action object', () => {
  const text = 'textFilter';
  const action = setTextFilter((text))
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'textFilter',
  })
});

test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
});

test('should generate sortByDate action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
});

