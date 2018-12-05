import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Test for default filter values...", () => {
  const state = filtersReducer(undefined, "@@INIT");
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf,
    endDate: moment().endOf
  });
});
test("Test for default filter values...", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf,
    endDate: moment().endOf
  };

  const action = { type: "SORT_BY", sortBy: "amount" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("amount");
});
//"SET_TEXT_FILTER"
test("Test text filter change...", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf,
    endDate: moment().endOf
  };

  const action = { type: "SET_TEXT_FILTER", text: "abc123" };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe("abc123");
});

//"SET_START_DATE":
test("Test start date filter change...", () => {
  const startDate = moment().startOf;
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: "SET_START_DATE", startDate: startDate };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toBe(startDate);
});
//"SET_END_DATE":
test("Test end date filter change...", () => {
  const endDate = moment().endOf;
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: "SET_END_DATE", endDate: endDate };
  const state = filtersReducer(currentState, action);
  expect(state.endDate).toBe(endDate);
});
