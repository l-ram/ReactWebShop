import { PaymentElement, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from './payment-form.styles'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const PaymentForm = () => {

    const { cartTotal } = useContext(CartContext);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [message, setMessage] = useState(null);

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: cartTotal * 100 }),
        }).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;
        console.log('Stripe handshake');

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Larry R'
                },
            },
        });

        setIsProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful')
            }
        };
    };

    const paymentElementOptions = {
        layout: "tabs"
      }

    return (

        <form id="payment-form" onSubmit={paymentHandler}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isProcessingPayment || !stripe || !elements} id="submit">
          <span id="button-text">
            {isProcessingPayment ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>


        /* <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement  />
                <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer> */
    );
};

export default PaymentForm;