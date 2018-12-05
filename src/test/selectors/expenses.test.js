import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

//1
test("selectExpenses selector (filter by text)...", () => {
  const filters = {
    text: "i",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});
//2
test("selectExpenses selector (filter by startDate)...", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});
//3
test("selectExpenses selector (filter by endDate)...", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});
//4
test("selectExpenses selector (sort by date)...", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
//5
test("selectExpenses selector (sort by amount)...", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
