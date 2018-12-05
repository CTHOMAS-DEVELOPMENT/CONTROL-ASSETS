import React from "react";
import { connect } from "react-redux";
import AssetForm from "./AssetForm";
import { editAsset, removeAsset } from "../actions/assets";
//http://167.99.201.85/v1/projects?filter=%7B%20%22where%22%3A%20%7B%20%22projectId%22%3A%20%22abc-estates%22%20%7D%2C%20%20%22order%22%3A%20%22projectId%20ASC%22%2C%20%20%22limit%22%3A%202%2C%20%20%22fields%22%3A%20%7B%22ownerId%22%3A%20false%7D%20%7D&access_token=X6exxmuh3PXCpHwtWJC5jzwu1r67thPzYh80HrispUwwwpEUfnCIwUPyp1fpMDPW
const EditAssetPage = props => {
  console.log("Token id = ", props.match.params.token);
  console.log("EditAssetPage id = ", props.match.params.id);
  const filter = {
    where: {
      projectId: props.match.params.id
    },
    order: "projectId ASC",
    limit: 1,
    fields: { ownerId: false }
  };
  const fetchProduct = () => {
    const url = `http://167.99.201.85/v1/projects?access_token=${
      props.match.params.token
    }&filter=${filter})`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        /*this.setState({
          username: username,
          password: password,
          id: id,
          ttl: ttl,
          created: created,
          userId: userId,
          products: data
        });*/

        console.log("data", data);
      })
      .catch(err => console.error("Caught error fetching products: ", err));
  };
  fetchProduct();
  return (
    <div>
      <AssetForm
        expense={props.expense}
        onSubmit={expense => {
          //console.log("Expense", expense);
          props.dispatch(editAsset(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={e => {
          //console.log(props.expense.id);
          props.dispatch(removeAsset({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(EditAssetPage);
