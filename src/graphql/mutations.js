/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($id: ID!, $email: String!, $familyName: String!) {
    createUser(id: $id, email: $email, familyName: $familyName) {
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
export const createFamilyMember = /* GraphQL */ `
  mutation CreateFamilyMember($id: ID!, $userID: ID!, $name: String!) {
    createFamilyMember(id: $id, userID: $userID, name: $name) {
      id
      userID
      name
      __typename
    }
  }
`;
