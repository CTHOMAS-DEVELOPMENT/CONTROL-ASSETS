import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Remove expenses action generator...", () => {
  expect(removeExpense({ id: "abc123" })).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("Edit expenses action generator...", () => {
  expect(editExpense("abc123", { description: "blah" })).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: { description: "blah" }
  });
});
test("Add expenses action generator...", () => {
  const expenseData = {
    description: "First record",
    note: "The first",
    amount: 100,
    createdAt: 10000
  };
  expect(addExpense(expenseData)).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test("Add expenses action generator with default values...", () => {
  const defaultData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  expect(addExpense()).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultData,
      id: expect.any(String)
    }
  });
});
