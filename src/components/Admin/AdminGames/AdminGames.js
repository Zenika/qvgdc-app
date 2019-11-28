import { useMutation, useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import NetworkStatus from 'components/NetworkStatus/NetworkStatus';
import React, { useState } from 'react';
import { Edit, PlayCircle, Trash2 } from 'react-feather';
import { useHistory } from 'react-router-dom';

import CrudList from '../CrudList/CrudList';
import { ADD_GAME, DELETE_GAME, UPDATE_GAME, USER_QUERY } from './AdminGames.actions';

const AdminGames = () => {
  const [input, setInput] = useState('');
  const history = useHistory();
  const { loading, error, data, refetch } = useQuery(USER_QUERY);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteGameMutation] = useMutation(DELETE_GAME, {
    onCompleted() {
      refetch();
    },
  });

  const [updateGameMutation, { loading: updatingGame }] = useMutation(UPDATE_GAME, {
    onCompleted() {
      refetch();
    },
  });

  const [addGameMutation] = useMutation(ADD_GAME, {
    onCompleted() {
      refetch();
    },
  });

  const addGame = () => {
    setDialogOpen(false);
    addGameMutation({
      variables: { title: input },
    });
    setInput('');
  };

  const toggleOpenGame = (gameId, state) => {
    updateGameMutation({ variables: { gameId, data: { open: state } } });
  };

  const deleteGame = (games, gameId) => {
    data.me.games.filter((g) => g.id !== gameId);

    deleteGameMutation({
      variables: { gameId },
    });
  };

  if (loading) return <div>Chargement des parties...</div>;
  if (error) return <div>Erreur lors du chargement des parties, veuillez réessayer.</div>;

  const gamesToRender = data.me.games;
  const dataTable = {
    columns: [
      { title: 'Titre', slug: 'title' },
      { title: 'Joueurs', slug: 'players', content: (game) => game.players.length },
      {
        title: 'Statut',
        slug: 'open',
        content: (game) => (
          <>
            <IconButton disabled={updatingGame} size="small" onClick={() => toggleOpenGame(game.id, !game.open)}>
              <NetworkStatus online={game.open} />
            </IconButton>
          </>
        ),
      },
      {
        title: 'Terminée',
        slug: 'finish',
        content: (game) => (
          <>
            <IconButton size="small">
              <NetworkStatus online={game.finish} />
            </IconButton>
          </>
        ),
      },
      {
        title: '',
        slug: 'actions',
        content: (game) => (
          <>
            <IconButton onClick={() => history.push(`/admin/${game.id}`)} size="small">
              <Edit size="16" />
            </IconButton>
            <IconButton size="small" onClick={() => deleteGame(gamesToRender, game.id)}>
              <Trash2 size="16" />
            </IconButton>
            <IconButton size="small">
              <PlayCircle size="16" />
            </IconButton>
          </>
        ),
      },
    ],
    data: gamesToRender,
    title: 'Ajouter une partie',
    actions: (
      <Button size="small" onClick={() => setDialogOpen(true)} variant="contained" color="primary">
        Ajouter une partie
      </Button>
    ),
  };

  const dataDialog = {
    title: 'Ajouter une partie',
    description: 'Pour ajouter une partie, veuillez renseigner son nom.',
    open: dialogOpen,
    closeDialog: setDialogOpen,
    completeDialog: addGame,
    fields: [
      <TextField
        key="name"
        onChange={(e) => setInput(e.target.value)}
        autoFocus
        margin="dense"
        id="name"
        label="Nom de la partie"
        fullWidth
        variant="outlined"
      />,
    ],
  };

  return (
    <>
      <CrudList table={dataTable} dialog={dataDialog} />
    </>
  );
};

export default AdminGames;
