import 'dotenv/config';
import 'stripe';

const stripe = (process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'eur',
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent})
        };
    } catch (error) {
        console.log({ error });

        return {
            status: 400,
            body: JSON.stringify({ error })
        }
    }
};
