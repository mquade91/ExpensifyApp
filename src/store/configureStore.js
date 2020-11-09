import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from '../reducers/expenses';
import fitlersReducers from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: fitlersReducers,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};