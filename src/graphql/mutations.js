export const createUser = /* GraphQL */ `
  mutation CreateUser($email: String!, $familyName: String!) {
    createUser(input: { email: $email, familyName: $familyName }) {
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
  mutation CreateFamilyMember($userID: ID!, $name: String!) {
    createFamilyMember(input: { userID: $userID, name: $name }) {
      userID
      name
      __typename
    }
  }
`;
