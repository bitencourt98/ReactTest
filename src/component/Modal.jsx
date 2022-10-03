import React, { useState } from "react";

import "../css/modal.css";
import "../css/button.css";
import "../css/inputHead.css";

const Modal = (arg) => {

    const [inputDescription, setInputDescription] = useState('');
    const [inputCurrency, setInputCurrency] = useState('');


  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="input-text">
            <span>Descricao</span>
            <input value={inputDescription} onChange={(e) => {setInputDescription(e.target.value)}  }  className='input-modal' type="text" placeholder='Descrição do produto' />
          </div>

          <div className="input-text">
            <span>Valor</span>
            <input value={inputCurrency} onChange={(e) => {setInputCurrency(e.target.value)}  } className='input-modal' type="number" min={0} max={9999.99} placeholder='Valor' />
          </div>

          <div className="flex-button">
            <button className="button">Atualiza</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
