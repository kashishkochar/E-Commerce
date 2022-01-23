import React from "react";

const Products = (props) => {

  const { addToCart } = props;
  
  return (
    <div className="container">
      {props.appItems.map((item, index) => (
        <div className="item" key={index}>
          <img
            src={item.prodImg}
            style={{ border: "solid red", borderRadius: "10px" }}
          ></img>
          <p>{item.productName}</p>
          <p>{item.specs}</p>
          <span style={{ fontFamily: "Arial" }}>&#8377;{item.price}</span>
          <p>{item.seller}</p>
          <button className="buttonCss" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
