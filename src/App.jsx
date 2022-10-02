import React, { useState } from "react";

import InputHead from "./component/InputHead";

import "./App.css"
import "./css/form-container.css";
import Products from "./component/Products";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      description: "Mel de Laranjeira",
      price: 15.85,
    },
    {
      id: "2",
      description: "Mel de Eucalipto",
      price: 19.99,
    },
    {
      id: "3",
      description: "Mel de Bracatinga",
      price: 23.89,
    },
    {
      id: "4",
      description: "Mel de Mandaçaia",
      price: 58.75,
    },
  ]);

  return (
    <>
      <div className="formContainer">
        <div>
          <InputHead className="upperContainer" />
        </div>

        <div className="formList">
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default App;
