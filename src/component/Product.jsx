import React from "react";

import "../css/button.css";
import "../css/product-list.css";

const Product = ({ product }) => {
  return (
    <>
      <table className="table">
        <tr>
          <td>
            <div className="item">{product.description}</div>
            <div className="price">R${product.price}</div>
          </td>
          <td>
          </td>
          <td>
            <div className="button erase"></div>
            <div className="button edit"></div>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Product;
