import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 15, createdAt: 0}))
store.dispatch(addExpense({ description: 'gas bill', amount: 21, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'rent', amount: 1095, createdAt: 0}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('app.js')

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);


ReactDOM.render( jsx, document.getElementById("root"));