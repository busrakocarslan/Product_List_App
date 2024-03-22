import React, { useState } from "react";
import { products } from "../../helper/data";

function Filtreproduct({ category }) {
  const [filtreUrun, setFiltreUrun] = useState(products);

  const filtrele = (secilen) => {
    const sonucFiltre =
      secilen === "ALL"
        ? products
        : products.filter((product) => product.category === secilen);
    setFiltreUrun(sonucFiltre);
  };
  return (
    <div>
      <div className="buttonDiv">
      <button onClick={() => filtrele("ALL")}>ALL</button>
      <button onClick={() => filtrele("women's clothing")}>Women's clothing</button>
      <button onClick={() => filtrele("men's clothing")}>Men's Clothing</button>
      <button onClick={() => filtrele("electronics")}>Electronic</button>
      <button onClick={() => filtrele("jewelery")}>Jewelery</button>
      </div>
      <div className="grid">
        {filtreUrun.map(({ title, id, price, category, image }) => (
          <div className="anaDiv" key={id}>
            <div className="img">
              <img src={image} alt={title} />
              <p>{price} $</p>
            </div>
            <div className="title">
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filtreproduct;
