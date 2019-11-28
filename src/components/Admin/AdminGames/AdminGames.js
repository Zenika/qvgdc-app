import { useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import gql from 'graphql-tag';
import React, { useState } from 'react';

import AdminAddGame from '../AdminAddGame/AdminAddGame';
import styles from './AdminGames.module.scss';

const USER_QUERY = gql`
  {
    me {
      games {
        id
        title
      }
    }
  }
`;

const AdminGames = () => {
  const { loading, error, data, refetch } = useQuery(USER_QUERY);
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeAndRefetch = () => {
    setDialogOpen(false);
    refetch();
  };

  if (loading) return <div>Chargement des parties...</div>;
  if (error) return <div>Erreur lors du chargement des parties, veuillez réessayer.</div>;

  const gamesToRender = data.me.games;

  return (
    <>
      <div className={styles.title}>
        <h2>Parties</h2>
        <Button onClick={() => setDialogOpen(true)} variant="contained" color="primary">
          Ajouter une partie
        </Button>
      </div>
      <AdminAddGame open={dialogOpen} close={setDialogOpen} complete={closeAndRefetch} />
      {gamesToRender && gamesToRender.length ? (
        <>
          {gamesToRender.map((game) => (
            <div key={game.id}>{game.title}</div>
          ))}
        </>
      ) : (
        <p>Aucune partie créée</p>
      )}
    </>
  );
};

export default AdminGames;
