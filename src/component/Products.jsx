import React from 'react';

import Product from './Product';

const Products = ({products}) => {
    console.log(products);
    return ( 
        <>
            {products.map(product => <Product product={product} />)}
        </>
     );
}
 
export default Products;