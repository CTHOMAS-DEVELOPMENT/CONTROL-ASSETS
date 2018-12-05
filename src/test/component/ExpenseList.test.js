import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";

test("Should render Expense List correctly..", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});
test("Should render no Expense List correctly with no expenses..", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
