import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesTotal, expensesCount }) => {

  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';

  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
      <div className="page-header__actions">
        <Link to="/create" className="button"> Add Expense </Link>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesTotal: getExpensesTotal(visibleExpenses),
    expensesCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);