import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should test the default state of expenses..", () => {
  const state = expensesReducer(undefined, "@@INIT");
  expect(state).toEqual([]);
});
//"ADD_EXPENSE"
test("Should test the add expense reducer..", () => {
  const newExpense = {
    id: "4",
    description: "Fourth record",
    note: "The fourth",
    amount: 250,
    createdAt: moment(0)
  };
  const action = { type: "ADD_EXPENSE", newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[3]]);
});

//"REMOVE_EXPENSE"

test("Should test the remove expense reducer..", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
//"EDIT_EXPENSE"
test("Should test the edit expense reducer..", () => {
  const amount = 275;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { amount: amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});
//"EDIT_EXPENSE"
test("Should test the edit expense reducer if id is wrong..", () => {
  const amount = 275;
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: { amount: amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
