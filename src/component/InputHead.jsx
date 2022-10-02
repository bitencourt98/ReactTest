import React, { useState } from 'react';

import "../css/button.css"
import "../css/inputHead.css"

const InputHead = ({handleProductAdd}) => {

    const [inputDescription, setInputDescription] = useState('');
    const [inputCurrency, setInputCurrency] = useState('');
    
    const handleDescription = (capturedDescription) =>{
        setInputDescription(capturedDescription.target.value);
    }
    
    const handleCurrency = (capturedValue) =>{
        setInputCurrency(capturedValue.target.value);
    }

    const handleAddProductButton = () => {
        handleProductAdd(inputDescription, inputCurrency);
    }

    
    return ( 
        <div className='inputHead'>
            <input value={inputDescription} onChange={handleDescription} className='input' type="text" placeholder='Descrição do produto' />
            <input value={inputCurrency} onChange={handleCurrency} className='input' type="number" min={0} max={9999.99} placeholder='Valor' />
            <button onClick={handleAddProductButton} className='button'>Adicionar</button>
        </div>
    );
}
 
export default InputHead;