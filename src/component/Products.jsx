import React from 'react';

import Product from './Product';
import "../css/product-list.css";


const Products = ({products, handleProductRemove, handleProductUpdate}) => {
    console.log(products);
    return ( 
        <>
            <table className="table">
                <tbody>
                    {products.map(product => <Product product={product} handleProductRemove={handleProductRemove} handleProductUpdate={handleProductUpdate}/>)}
                </tbody>
            </table>
        </>
     );
}
 
export default Products;