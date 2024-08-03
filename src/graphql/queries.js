/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRSVPByEmail = /* GraphQL */ `
  query GetRSVPByEmail($email: String!) {
    getRSVPByEmail(email: $email) {
      id
      name
      email
      attending
      guests
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const getRSVP = /* GraphQL */ `
  query GetRSVP($id: ID!) {
    getRSVP(id: $id) {
      id
      name
      email
      attending
      guests
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRSVPS = /* GraphQL */ `
  query ListRSVPS(
    $filter: ModelRSVPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRSVPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        attending
        guests
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
