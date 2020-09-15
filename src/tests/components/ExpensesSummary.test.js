import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

import expenses from '../fixtures/expenses';

test('should render ExpenseSummary component with values', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />)
  expect(wrapper).toMatchSnapshot();
});