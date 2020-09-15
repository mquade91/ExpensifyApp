import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary component with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={5000} />)
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h3').text()).toEqual('Viewing 3 expenses totalling $50.00');
});

test('should correctly render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000} />)
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h3').text()).toEqual('Viewing 1 expense totalling $10.00');
});