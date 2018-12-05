import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import AddAssetPage from "../components/AddAssetPage";
import EditAssetPage from "../components/EditAssetPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/create" component={AddAssetPage} />
        <Route path="/edit/:id/:token" component={EditAssetPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
