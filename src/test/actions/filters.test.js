import moment from "moment";
import {
  setTextFilter,
  setSortFilter,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("SetTextFilter action generator...", () => {
  const text = "abc123";
  expect(setTextFilter(text)).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});
test("SetTextFilter (No arguments) action generator...", () => {
  expect(setTextFilter()).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("setSortFilter action generator...", () => {
  expect(setSortFilter("abc123")).toEqual({
    type: "SORT_BY",
    sortBy: "abc123"
  });
});

test("setSortFilter (no argument) action generator...", () => {
  expect(setSortFilter()).toEqual({
    type: "SORT_BY",
    sortBy: "amount"
  });
});

test("setStartDate action generator...", () => {
  expect(setStartDate(moment(0))).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});
test("setEndDate action generator...", () => {
  expect(setEndDate("100002")).toEqual({
    type: "SET_END_DATE",
    endDate: "100002"
  });
});
