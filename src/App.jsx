import React from 'react';

import InputHead from './component/InputHead';
import FormList from './component/FormList';

import "./css/form-container.css"

const App = () =>{
  return(
    <div className='formContainer'>
      <InputHead className='upperContainer' />
      <FormList className='formList' />
    </div>
  )
}

export default App;
