// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PaymentIntent, createPaymentIntent, Product, CartProduct, OrderProduct, Order } = initSchema(schema);

export {
  PaymentIntent,
  createPaymentIntent,
  Product,
  CartProduct,
  OrderProduct,
  Order
};