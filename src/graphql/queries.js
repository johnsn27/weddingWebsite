/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      familyName
      familyMembers {
        id
        userID
        name
        __typename
      }
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers {
      id
      email
      familyName
      familyMembers {
        id
        userID
        name
        __typename
      }
      __typename
    }
  }
`;
export const listFamilyMembers = /* GraphQL */ `
  query ListFamilyMembers($userID: ID!) {
    listFamilyMembers(userID: $userID) {
      id
      userID
      name
      __typename
    }
  }
`;
