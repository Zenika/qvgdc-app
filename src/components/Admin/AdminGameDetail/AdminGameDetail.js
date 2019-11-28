import React from 'react';
import { useParams } from 'react-router-dom';

const AdminGameDetail = () => {
  let { gameId } = useParams();

  return (
    <>
      <p>Admin Game Detail {gameId}</p>
    </>
  );
};

export default AdminGameDetail;
