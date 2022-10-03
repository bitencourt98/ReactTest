import React from "react";

import "../css/button.css";
import "../css/product-list.css";

const Product = ({ product, handleProductRemove, handleProductUpdate }) => {

  const deleteProduct = () => {
    handleProductRemove(product.id)
  }
  
  const editProduct = (id) => {
    handleProductUpdate(product);
  }

  return (
    <>
      <tr>
        <td>
          <div className="item">{product.description}</div>
          <div className="price">R${product.price}</div>
        </td>
        <td>
          <button onClick={deleteProduct} className="button erase"></button>
          <button onClick={editProduct} className="button edit"></button>
        </td>
      </tr>
    </>
  );
};

export default Product;
