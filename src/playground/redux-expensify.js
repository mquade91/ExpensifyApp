import {
  createStore,
  combineReducers
} from 'redux';
import uuid from 'uuid';


//ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
})
// REMOVE_EXPENSE
const removeExpense = ({
  id
} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
})

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {

  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({
        id
      }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          }
        }
      })
    default:
      return state;

  }
};

// filters reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'Date',
  startDate: undefined,
  endDate: undefined,
};

const setTextFilter = (text = "") => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'Amount'
})

const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: 'Date',
})

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
})

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
})

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy,
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy,
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state;
  }
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
)

//timestamps(milliseconds)


//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, {
  text,
  sortBy,
  startDate,
  endDate
}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch =
      typeof expense.description !== 'string' ||
      expense.description.toLowerCase().includes(text.toLowerCase().replace(/\s/g, ''));

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'Date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'Amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  // console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 300,
  createdAt: -21000,
}));
const expenseTwo = store.dispatch(addExpense({
  description: 'Food',
  amount: 200,
  createdAt: -1000,
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('food'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());

// store.dispatch(setEndDate(1000));


// const demoState = {
//   expenses: [{
//     id: '29452495',
//     description: 'Jan Rent',
//     note: 'This was the last time i have to pay rent woo woo',
//     amount: 54500,
//     createdAt: 0,
//   }],

//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined,
//   }
// };