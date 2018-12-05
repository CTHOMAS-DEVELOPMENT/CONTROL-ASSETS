import React from "react";
import AssetList from "./AssetList";

const AssetDashboardPage = props => (
  <div>
    <AssetList token={props.token} products={props.products} />
  </div>
);

export default AssetDashboardPage;
