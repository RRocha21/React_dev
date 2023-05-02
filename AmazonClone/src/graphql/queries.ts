/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPaymentIntent = /* GraphQL */ `
  query GetPaymentIntent($id: ID!) {
    getPaymentIntent(id: $id) {
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
export const listPaymentIntents = /* GraphQL */ `
  query ListPaymentIntents(
    $filter: ModelPaymentIntentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaymentIntents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        clientSecret
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPaymentIntents = /* GraphQL */ `
  query SyncPaymentIntents(
    $filter: ModelPaymentIntentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaymentIntents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        clientSecret
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCreatePaymentIntent = /* GraphQL */ `
  query GetCreatePaymentIntent($id: ID!) {
    getCreatePaymentIntent(id: $id) {
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
export const listCreatePaymentIntents = /* GraphQL */ `
  query ListCreatePaymentIntents(
    $filter: ModelCreatePaymentIntentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreatePaymentIntents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCreatePaymentIntents = /* GraphQL */ `
  query SyncCreatePaymentIntents(
    $filter: ModelCreatePaymentIntentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCreatePaymentIntents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
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
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
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
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
