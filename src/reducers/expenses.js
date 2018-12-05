const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      const { description, note, createdAt, amount } = action.updates;
      return state.map(expense => {
        if (expense.id === action.id) {
          expense.description = description;
          expense.note = note;
          expense.createdAt = createdAt;
          expense.amount = amount;
        }
        return expense;
      });
    default:
      return state;
  }
};
