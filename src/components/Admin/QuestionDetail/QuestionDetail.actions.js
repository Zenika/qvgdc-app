import gql from 'graphql-tag';

export const QUESTIONDETAIL_QUERY = gql`
  query question($questionId: ID!) {
    question(questionId: $questionId) {
      id
      title
      game {
        title
      }
    }
  }
`;
