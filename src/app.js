import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render( jsx, document.getElementById("root"));
    hasRendered = true;
  }
}
ReactDOM.render( <p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      const onLoginPage = history.location.pathname === '/';
      if(onLoginPage) {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/'); // bring to login page
  }
});