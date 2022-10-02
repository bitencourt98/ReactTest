import React from 'react';

import Products from './Products';

const FormList = (products) => {
    return ( 
        <div>
            <Products products={products}/>
        </div>
     );
}
 
export default FormList;