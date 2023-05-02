/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent(
    $input: CreatePaymentIntentInput!
    $condition: ModelPaymentIntentConditionInput
  ) {
    createPaymentIntent(input: $input, condition: $condition) {
      clientSecret
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePaymentIntent = /* GraphQL */ `
  mutation UpdatePaymentIntent(
    $input: UpdatePaymentIntentInput!
    $condition: ModelPaymentIntentConditionInput
  ) {
    updatePaymentIntent(input: $input, condition: $condition) {
      clientSecret
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePaymentIntent = /* GraphQL */ `
  mutation DeletePaymentIntent(
    $input: DeletePaymentIntentInput!
    $condition: ModelPaymentIntentConditionInput
  ) {
    deletePaymentIntent(input: $input, condition: $condition) {
      clientSecret
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCreatePaymentIntent = /* GraphQL */ `
  mutation CreateCreatePaymentIntent(
    $input: CreateCreatePaymentIntentInput!
    $condition: ModelCreatePaymentIntentConditionInput
  ) {
    createCreatePaymentIntent(input: $input, condition: $condition) {
      createPaymentIntent {
        clientSecret
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCreatePaymentIntent = /* GraphQL */ `
  mutation UpdateCreatePaymentIntent(
    $input: UpdateCreatePaymentIntentInput!
    $condition: ModelCreatePaymentIntentConditionInput
  ) {
    updateCreatePaymentIntent(input: $input, condition: $condition) {
      createPaymentIntent {
        clientSecret
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCreatePaymentIntent = /* GraphQL */ `
  mutation DeleteCreatePaymentIntent(
    $input: DeleteCreatePaymentIntentInput!
    $condition: ModelCreatePaymentIntentConditionInput
  ) {
    deleteCreatePaymentIntent(input: $input, condition: $condition) {
      createPaymentIntent {
        clientSecret
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      name
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      name
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      name
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      productId
      userSub
      quantity
      option
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      productId
      userSub
      quantity
      option
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      productId
      userSub
      quantity
      option
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productId
      orderId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productId
      orderId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productId
      orderId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
