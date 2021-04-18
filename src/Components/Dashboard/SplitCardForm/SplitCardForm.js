import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";




const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  
  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null)
      handlePayment(paymentMethod.id)
    }

  };

  return (
    <div style={{marginLeft:"20px"}}>
      <form onSubmit={handleSubmit}>
        <label>
          Card number
        <CardNumberElement
            options={options}
            onReady={() => {
            }}
            onChange={event => {
            }}
            onBlur={() => {
            }}
            onFocus={() => {
            }}
          />
        </label>
        <br />
        <label>
          Expiration date
        <CardExpiryElement
            options={options}
            onReady={() => {
            }}
            onChange={event => {
            }}
            onBlur={() => {
            }}
            onFocus={() => {
            }}
          />
        </label>
        <br />
        <label>
          CVC
        <CardCvcElement
            options={options}
            onReady={() => {
            }}
            onChange={event => {
            }}
            onBlur={() => {
            }}
            onFocus={() => {
            }}
          />
        </label>
        <br />
        <button className="btn-style" type="submit" disabled={!stripe}>
          Pay
      </button>
      </form>
      {
        paymentError && <p style={{color:"red"}}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{color:"green"}}>Thank You For The Payment</p>
      }
    </div>
  );
};

export default SplitCardForm;
