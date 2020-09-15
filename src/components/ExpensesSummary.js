import React from 'react';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expenses}) => {
  const expenseCount = expenses.length;
  const expensesTotal = numeral(getExpensesTotal(expenses)/100)
    .format('$0,0.00');
  return (
  <div>
    <h3> {`Viewing ${expenseCount} expenses totalling ${expensesTotal}`} </h3>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);