import React from "react";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
          className="checkout_ad"
        />

        <div>
          <h5>{user && "hello, " + user.email}</h5>
          <h2 className="checkout_title">Your shopping basket</h2>

          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
