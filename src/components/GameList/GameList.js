import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

import styles from './GameList.module.scss';

const GAME_QUERY = gql`
  {
    games(open: true) {
      id
      title
      players {
        id
      }
    }
  }
`;

export default function GameList(props) {
  return (
    <Query query={GAME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Chargement des parties...</div>;
        if (error) return <div>Erreur lors du chargement des parties, veuillez réessayer.</div>;

        const gamesToRender = data.games;

        const plural = gamesToRender > 1 ? 's' : '';

        return (
          <div className={styles.gameList}>
            <FormControl component="fieldset">
              {}
              <h2 className={styles.h2}>
                {gamesToRender.length} partie{plural} disponible{plural} :
              </h2>
              <RadioGroup
                aria-label="Deux parties disponibles"
                name="games"
                value={props.value || ''}
                onChange={(event) => props.onChange(gamesToRender.find((g) => g.id === event.target.value))}
              >
                {gamesToRender.map((game) => (
                  <FormControlLabel key={game.id} value={game.id} control={<Radio />} label={game.title} />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        );
      }}
    </Query>
  );
}
