import React from 'react';

import Product from './Product';

const Products = ({products}) => {
    console.log(products);
    return ( 
        <>
            <p> testes produtos</p>
            {products.map(product => <Product product={product} />)}
        </>
     );
}
 
export default Products;