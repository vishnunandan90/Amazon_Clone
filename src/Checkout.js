import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492688_.jpg"
          alt=""
        />
        <div className="">
          <h2 className="checkout-title">
            hey {user?.email} Your Shoppping Basket
          </h2>
          {basket.map((product) => (
            <CheckoutProduct
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
        {/* <h2> Sub Total</h2> */}
      </div>
    </div>
  );
}

export default Checkout;
