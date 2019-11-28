import { useMutation, useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import NetworkStatus from 'components/NetworkStatus/NetworkStatus';
import React, { useState } from 'react';
import { Edit, PlayCircle, Trash2 } from 'react-feather';

import AdminAddGame from '../AdminAddGame/AdminAddGame';
import { DELETE_GAME, UPDATE_GAME, USER_QUERY } from './AdminGames.actions';
import styles from './AdminGames.module.scss';

const AdminGames = () => {
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

  const closeAndRefetch = () => {
    setDialogOpen(false);
    refetch();
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

  return (
    <>
      <AdminAddGame open={dialogOpen} close={setDialogOpen} complete={closeAndRefetch} />
      <Paper className={styles.paper}>
        <Toolbar>
          <div className={styles.title}>
            <h2 className="h3">Parties</h2>
            <Button size="small" onClick={() => setDialogOpen(true)} variant="contained" color="primary">
              Ajouter une partie
            </Button>
          </div>
        </Toolbar>
        {gamesToRender && gamesToRender.length ? (
          <Table aria-label="Liste des parties">
            <TableHead>
              <TableRow>
                <TableCell>Titre</TableCell>
                <TableCell>Joueurs</TableCell>
                <TableCell>Statut</TableCell>
                <TableCell>Terminée</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {gamesToRender.map((game) => (
                <TableRow key={game.id}>
                  <TableCell>{game.title}</TableCell>
                  <TableCell>{game.players.length}</TableCell>
                  <TableCell>
                    <IconButton disabled={updatingGame} size="small" onClick={() => toggleOpenGame(game.id, !game.open)}>
                      <NetworkStatus online={game.open} />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <NetworkStatus online={game.finish} />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <Edit size="16" />
                    </IconButton>
                    <IconButton size="small" onClick={() => deleteGame(gamesToRender, game.id)}>
                      <Trash2 size="16" />
                    </IconButton>
                    <IconButton size="small">
                      <PlayCircle size="16" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p>Aucune partie créée</p>
        )}
      </Paper>
    </>
  );
};

export default AdminGames;
