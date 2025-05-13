import { gql } from '@apollo/client';

export const GET_USER = gql`
  query {
    user(id: 1) {
      id
      name
      email
    }
  }
`;
