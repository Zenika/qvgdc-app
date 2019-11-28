import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ArrowLeft } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

import AdminQuestions from '../AdminQuestions/AdminQuestions';
import { GAMEDETAIL_QUERY } from './AdminGameDetail.action';

const AdminGameDetail = () => {
  let { gameId } = useParams();
  const { loading, error, data, refetch } = useQuery(GAMEDETAIL_QUERY, {
    variables: {
      gameId,
    },
  });

  if (loading) return <div>Chargement de la partie...</div>;
  if (error) return <div>Problème lors du chargement de la partie</div>;

  return (
    <>
      <Link to="/admin">
        <ArrowLeft size="16" /> Retour
      </Link>

      <h2>{data.game.title}</h2>
      <AdminQuestions gameId={gameId} />
    </>
  );
};

export default AdminGameDetail;
