import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { ChevronRight, Home } from 'react-feather';
import { Link, useParams } from 'react-router-dom';

import Choices from '../Choices/Choices';
import { QUESTIONDETAIL_QUERY } from './QuestionDetail.actions';

const AdminGameDetail = () => {
  let { gameId, questionId } = useParams();
  const { loading, error, data, refetch } = useQuery(QUESTIONDETAIL_QUERY, {
    variables: {
      questionId,
    },
  });

  if (loading) return <div>Chargement de la question...</div>;
  if (error) return <div>Problème lors du chargement de la question</div>;

  return (
    <>
      <p>
        <Link to="/admin">
          <Home size="16" />
        </Link>
        <ChevronRight size="12" />
        <Link to={`/admin/${gameId}`}>{data.question.game.title}</Link>
        <ChevronRight size="12" />
        {data.question.title}
      </p>

      <h2>{data.question.title}</h2>
      <Choices questionId={questionId} />
    </>
  );
};

export default AdminGameDetail;
