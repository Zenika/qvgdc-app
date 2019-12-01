import gql from 'graphql-tag';

export const GAMEDETAIL_QUERY = gql`
  query game($gameId: ID!) {
    game(gameId: $gameId) {
      id
      title
      currentQuestion {
        id
        title
      }
      players {
        id
        name
      }
      questions {
        id
        title
      }
    }
  }
`;
