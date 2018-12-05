import React from "react";
import { connect } from "react-redux";
import ProductListItem from "./ProductListItem";
import selectExpenses from "../selectors/expenses";

export const AssetList = props => (
  <div className="content-container list-header">
    {console.log("token*", props)}
    {props.products.length === 0 ? (
      <p>No Products</p>
    ) : (
      props.products.map(product => {
        //console.log("product?", product);
        return (
          <ProductListItem
            key={product.projectId}
            product={product}
            token={props.token}
          />
        );
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(AssetList);
