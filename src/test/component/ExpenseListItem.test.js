import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("Should render Expense List item correctly..", () => {
  const wrapper = shallow(<ExpenseListItem expenses={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
