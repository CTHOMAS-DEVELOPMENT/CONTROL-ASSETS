import React from "react";
import { Link } from "react-router-dom";
//http://167.99.201.85/v1/projects?filter=%7B%20%22where%22%3A%20%7B%20%22projectId%22%3A%20%22abc-estates%22%20%7D%2C%20%20%22order%22%3A%20%22projectId%20ASC%22%2C%20%20%22limit%22%3A%202%2C%20%20%22fields%22%3A%20%7B%22ownerId%22%3A%20false%7D%20%7D&access_token=X6exxmuh3PXCpHwtWJC5jzwu1r67thPzYh80HrispUwwwpEUfnCIwUPyp1fpMDPW
export const ProductListItem = props => {
  const product = props.product;
  const str = "test";
  console.log("test", props);
  return (
    <div className="show-for-desktop">
      <Link to={`/edit/${product.projectId}/${props.token}`}>
        <h3>{product.projectName}</h3>
      </Link>

      <p>
        {product.budget} - {product.active}
      </p>
    </div>
  );
};

export default ProductListItem;
