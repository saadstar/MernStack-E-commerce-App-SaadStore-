import React, { useEffect, useState } from 'react';
import  StripeCheckout  from "react-stripe-checkout";
import axios from "axios";

export const Pay = (props) => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
    };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://saadstore.onrender.com/api/payment",
          {
            tokenId: stripeToken.id,
            amount: props.totalPrice * 1000,
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div className="pay">
      <StripeCheckout
        name="Saad Store"
        image="https://firebasestorage.googleapis.com/v0/b/saadstore-ed76a.appspot.com/o/360_F_141407683_AmOuBtIH59zvyi1T9t0ZqZaMyYL0YGFY.webp?alt=media&token=9356773f-e8bc-4a68-aa8a-495a748f74de"
        billingAddress
        shippingAddress
        description={`Your total is $${props.totalPrice}`}
        amount={props.totalPrice * 1000}
        token={onToken}
        stripeKey={
          "pk_test_51O5ymXJZcYFup3doVvJhTtaYIh8eM3KPUJOqIftyKfDYZmRvI2TGbGCcEZl9UJ8ofnPxA4qaTd71LOuUMCQ7FlxM00v4Sz2i2h"
        }
      >
        <button>PROCEED TO CHECKOUT</button>
      </StripeCheckout>
    </div>
  );
};
