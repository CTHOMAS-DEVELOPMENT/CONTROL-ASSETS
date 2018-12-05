import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage";
const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default routes;
