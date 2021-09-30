import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      email
    }
  }
`;
