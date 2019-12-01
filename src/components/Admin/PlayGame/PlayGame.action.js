import gql from 'graphql-tag';

export const GAMEDETAIL_QUERY = gql`
  query game($gameId: ID!) {
    game(gameId: $gameId) {
      id
      title
      state
      currentQuestion {
        id
        title
        launched
        duration
      }
      players {
        id
        name
      }
      questions {
        id
        title
        launched
        duration
        choices {
          id
          title
        }
        goodChoice {
          id
          title
        }
      }
    }
  }
`;

export const GAMEDETAIL_SUBSCRIPTION = gql`
  subscription updatedGame($gameId: ID!) {
    updatedGame(gameId: $gameId) {
      id
      title
      state
      currentQuestion {
        id
        title
        launched
        duration
      }
      players {
        id
        name
      }
      questions {
        id
        title
        launched
        duration
        choices {
          id
          title
        }
        goodChoice {
          id
          title
        }
      }
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
