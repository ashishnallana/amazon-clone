import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const location = useLocation();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div
      className={`product ${
        location.pathname === "/search" && "search_product"
      }`}
    >
      <a href={id} target="_blank" className="product_url">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={id}>⭐</p>
              ))}
          </div>
        </div>
      </a>

      <a href={id} target="_blank">
        <img src={image} alt="product" />
      </a>
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
