import React from 'react';
import withAuthAdmin from '../../components/withAuthAdmin';

const Home: React.FC = () => {
  return (
    <h1>Painel Admin</h1>
  )
}

export default withAuthAdmin(Home);
