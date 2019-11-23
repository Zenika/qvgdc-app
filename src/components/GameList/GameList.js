import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';

import styles from './GameList.module.scss';

export default function GameList() {
  return (
    <div className={styles.gameList}>
      <FormControl component="fieldset">
        <h2 className={styles.h2}>Deux parties disponibles :</h2>
        <RadioGroup aria-label="Deux parties disponibles" name="games">
          <FormControlLabel value="1" control={<Radio />} label="NightClazz GraphQL" />
          <FormControlLabel value="2" control={<Radio />} label="Une autre partie de test" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
