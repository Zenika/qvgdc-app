import gql from 'graphql-tag';

export const USER_QUERY = gql`
  {
    me {
      games {
        id
        title
        players {
          id
        }
        open
      }
    }
  }
`;

export const DELETE_GAME = gql`
  mutation deleteGame($gameId: ID!) {
    deleteGame(gameId: $gameId) {
      id
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation updateGame($gameId: ID!, $data: GameInput!) {
    updateGame(gameId: $gameId, data: $data) {
      id
    }
  }
`;
