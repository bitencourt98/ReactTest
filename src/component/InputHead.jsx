import React from 'react';

import "../css/button.css"
import "../css/inputHead.css"

const InputHead = () => {
    
    function handleCurrency(capturedValue){
        console.log(capturedValue.target.value)
        //todo
    }

    function handleDescription(capturedDescription){
        console.log(capturedDescription.target.value)
        //todo
    }
    
    return ( 
        <div className='inputHead'>
            <input onChange={handleDescription} className='input' type="text" placeholder='Descrição do produto' />
            <input onChange={handleCurrency} className='input' type="number" min={0} max={9999.99} placeholder='Valor' />
            <button className='button'>Adicionar</button>
        </div>
    );
}
 
export default InputHead;