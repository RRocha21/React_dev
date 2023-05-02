
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// evemt
// {
//     "typeName": "Query" | "Mutation",
//     "fieldName": "createPaymentIntent",
//     "arguments": {
//         "input": {
//             "amount": 100,
//             "currency": "usd",
//         }
//     },
//     "source" :
//     "result" :
//     "prev" :
// }



const stripe = require("stripe")('sk_test_51N2IG4CAAYsE0izb3xlebo413YCBynpIbeKxExFbYcE8TUoebsDc9bnIn04VWHXedLyh9RDpA5KXw8TojHRbLGXz005THWIwaM');

exports.handler = async (event) => {
    const { typeName, arguments } = event;

    if (typeName !== "Mutation" || arguments.input === null) {
        throw new Error("Request is not a mutation");
    }

    if (!arguments?.amount) {
        throw new Error("Amount is required");
    }

    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
        amount: arguments.amount,
        currency: 'usd',
    });

    return {
        clientSecret: paymentIntent.client_secret,
    };

};
