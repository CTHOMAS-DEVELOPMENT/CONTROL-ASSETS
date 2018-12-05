import React from "react";
import AssetDashboardPage from "./AssetDashboardPage";
import { connect } from "react-redux";
export class LoginForm extends React.Component {
  fetchProducts = ({ username, password, id, ttl, created, userId }) => {
    const url = `http://167.99.201.85/v1/projects?access_token=${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          username: username,
          password: password,
          id: id,
          ttl: ttl,
          created: created,
          userId: userId,
          products: data
        });

        //console.log("data", this.state);
      })
      .catch(err => console.error("Caught error fetching products: ", err));
  };
  startLogin = (username, password) => {
    const url = "http://167.99.201.85/v1/accounts/login";
    const login = JSON.stringify({ username, password });
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        //2. If we have a token, get the existing 'products'

        this.fetchProducts({
          username: username,
          password: password,
          id: data.id,
          ttl: data.ttl,
          created: data.created,
          userId: data.userId
        });
      })
      .catch(err => console.error("Caught error logging in: ", err));

    return null;
  };

  handleSignIn = e => {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.startLogin(username, password);
  };

  render() {
    //1. Get a token if there is one
    const token =
      this.state !== null && this.state.id !== undefined ? this.state.id : 0;
    //2. Get products if they are there
    const products = token ? this.state.products : [];

    return (
      <div className="box-layout">
        {this.state !== null && this.state.id !== undefined ? (
          <AssetDashboardPage token={token} products={products} />
        ) : (
          <div className="box-layout__box">
            <h1 className="box-layout__title">Aspect Mine</h1>
            <form onSubmit={this.handleSignIn}>
              <input
                type="text"
                ref="username"
                placeholder="enter your username"
                value="ohtest"
                onChange={() => {}}
                autoFocus
              />
              <input
                type="password"
                ref="password"
                placeholder="enter your password"
              />
              <button className="button">Login</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  startLogin: () => {
    dispatch(this.startLogin());
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginForm);
