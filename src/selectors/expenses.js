//GET VISIBLE EXPENSES
import moment from 'moment'

export default (expenses, {
  text,
  sortBy,
  startDate,
  endDate
}) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt)

    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;

    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;

    const textMatch =
      typeof expense.description !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase().replace(/\s/g, ''));

    return startDateMatch && endDateMatch && textMatch

  }).sort((a, b) => {
    if (sortBy === 'Date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'Amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}