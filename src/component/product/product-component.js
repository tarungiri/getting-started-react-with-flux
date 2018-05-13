import React from "react";
import { Link } from "react-router-dom";

const ProductRow = props => {
  return (
    <tr>
      <td>
        <Link to={`/products/${props.data.id}/edit`}>
          {props.data.productName}
        </Link>
      </td>
      <td>{props.data.price}</td>
      <td>
        <a
          className="waves-effect waves-light btn"
          onClick={() => props.deleteProduct(props.data.id)}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default ProductRow;
