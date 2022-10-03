import React from "react";

import "../css/button.css";
import "../css/product-list.css";

const Product = ({ product, handleProductRemove }) => {

  const deleteProduct = () => {
    console.log('delete product with id:'+product.id);
    handleProductRemove(product.id)
  }
  
  const editProduct = (id) => {
    console.log('edit product with id:'+product.id);
    // handleProductUpdate
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
