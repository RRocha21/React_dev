/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePaymentIntent = /* GraphQL */ `
  subscription OnCreatePaymentIntent(
    $filter: ModelSubscriptionPaymentIntentFilterInput
  ) {
    onCreatePaymentIntent(filter: $filter) {
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
export const onUpdatePaymentIntent = /* GraphQL */ `
  subscription OnUpdatePaymentIntent(
    $filter: ModelSubscriptionPaymentIntentFilterInput
  ) {
    onUpdatePaymentIntent(filter: $filter) {
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
export const onDeletePaymentIntent = /* GraphQL */ `
  subscription OnDeletePaymentIntent(
    $filter: ModelSubscriptionPaymentIntentFilterInput
  ) {
    onDeletePaymentIntent(filter: $filter) {
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
export const onCreateCreatePaymentIntent = /* GraphQL */ `
  subscription OnCreateCreatePaymentIntent(
    $filter: ModelSubscriptionCreatePaymentIntentFilterInput
  ) {
    onCreateCreatePaymentIntent(filter: $filter) {
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
export const onUpdateCreatePaymentIntent = /* GraphQL */ `
  subscription OnUpdateCreatePaymentIntent(
    $filter: ModelSubscriptionCreatePaymentIntentFilterInput
  ) {
    onUpdateCreatePaymentIntent(filter: $filter) {
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
export const onDeleteCreatePaymentIntent = /* GraphQL */ `
  subscription OnDeleteCreatePaymentIntent(
    $filter: ModelSubscriptionCreatePaymentIntentFilterInput
  ) {
    onDeleteCreatePaymentIntent(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onCreateCartProduct(filter: $filter) {
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onUpdateCartProduct(filter: $filter) {
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct(
    $filter: ModelSubscriptionCartProductFilterInput
  ) {
    onDeleteCartProduct(filter: $filter) {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onCreateOrderProduct(filter: $filter) {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onUpdateOrderProduct(filter: $filter) {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct(
    $filter: ModelSubscriptionOrderProductFilterInput
  ) {
    onDeleteOrderProduct(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
