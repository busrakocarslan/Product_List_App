import { useState } from "react";
import { products } from "../../helper/data";
import "./productCard.scss";
// console.log(products);

function ProductCard() {
  return (
    <div className="grid">
      {products.map(({ title, id, price, category, image }) => (
        <div className="anaDiv" key={id}>
          <div className="img">
            <img src={image} alt={title} />
            <p>{price}💲</p>
          </div>
          <div className="title">
            <h3>{title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
