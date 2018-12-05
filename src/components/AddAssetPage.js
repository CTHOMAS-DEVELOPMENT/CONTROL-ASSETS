import React from "react";
import { connect } from "react-redux";
import AssetForm from "./AssetForm";
import { addAsset } from "../actions/assets";
const AddAssetPage = props => (
  <div>
    <AssetForm
      onSubmit={asset => {
        props.dispatch(addAsset(asset));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddAssetPage);
