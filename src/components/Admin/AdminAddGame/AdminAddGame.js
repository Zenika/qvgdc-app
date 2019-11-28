import { useMutation } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import gql from 'graphql-tag';
import React, { useState } from 'react';

const ADD_GAME = gql`
  mutation newGame($title: String!) {
    newGame(title: $title) {
      id
      title
    }
  }
`;

const AdminAddGame = (props) => {
  const [addGameMutation, { data }] = useMutation(ADD_GAME, {
    onCompleted(_) {
      props.complete();
    },
  });
  const [gameTitle, setGameTitle] = useState('');

  const addGame = () => {
    addGameMutation({
      variables: { title: gameTitle },
    });
  };

  return (
    <Dialog open={props.open} onClose={() => props.close(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Ajouter une partie</DialogTitle>
      <DialogContent>
        <DialogContentText>Pour ajouter une partie, veuillez renseigner son nom.</DialogContentText>
        <TextField
          onChange={(e) => setGameTitle(e.target.value)}
          autoFocus
          margin="dense"
          id="name"
          label="Nom de la partie"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.close(false)} color="primary">
          Annuler
        </Button>
        <Button onClick={addGame} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminAddGame;
