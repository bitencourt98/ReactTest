import React from 'react';

import Product from './Product';
import "../css/product-list.css";


const Products = ({products, handleProductRemove}) => {
    console.log(products);
    return ( 
        <>
            <table className="table">
                <tbody>
                    {products.map(product => <Product product={product} handleProductRemove={handleProductRemove}/>)}
                </tbody>
            </table>
        </>
     );
}
 
export default Products;