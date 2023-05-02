import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPaymentIntent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentIntent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientSecret: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPaymentIntent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PaymentIntent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientSecret: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagerPaymentIntent : LazyPaymentIntent

export declare const PaymentIntent: (new (init: ModelInit<PaymentIntent>) => PaymentIntent) & {
  copyOf(source: PaymentIntent, mutator: (draft: MutableModel<PaymentIntent>) => MutableModel<PaymentIntent> | void): PaymentIntent;
}

type EagercreatePaymentIntent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<createPaymentIntent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazycreatePaymentIntent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<createPaymentIntent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type createPaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagercreatePaymentIntent : LazycreatePaymentIntent

export declare const createPaymentIntent: (new (init: ModelInit<createPaymentIntent>) => createPaymentIntent) & {
  copyOf(source: createPaymentIntent, mutator: (draft: MutableModel<createPaymentIntent>) => MutableModel<createPaymentIntent> | void): createPaymentIntent;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly name: string;
  readonly description?: string | null;
  readonly image: string;
  readonly images: string[];
  readonly options?: string[] | null;
  readonly avgRating?: number | null;
  readonly ratings?: number | null;
  readonly price: number;
  readonly oldPrice?: number | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId: string;
  readonly userSub: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartProduct = LazyLoading extends LazyLoadingDisabled ? EagerCartProduct : LazyCartProduct

export declare const CartProduct: (new (init: ModelInit<CartProduct>) => CartProduct) & {
  copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct>) => MutableModel<CartProduct> | void): CartProduct;
}

type EagerOrderProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productId: string;
  readonly orderId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrderProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderProduct, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly option?: string | null;
  readonly productId: string;
  readonly orderId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrderProduct = LazyLoading extends LazyLoadingDisabled ? EagerOrderProduct : LazyOrderProduct

export declare const OrderProduct: (new (init: ModelInit<OrderProduct>) => OrderProduct) & {
  copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct>) => MutableModel<OrderProduct> | void): OrderProduct;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber: string;
  readonly country: string;
  readonly city: string;
  readonly address: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub: string;
  readonly fullName: string;
  readonly phoneNumber: string;
  readonly country: string;
  readonly city: string;
  readonly address: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}