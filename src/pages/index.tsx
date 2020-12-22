import React from 'react';
import Head from 'next/head';
import MainComponet from '../components/Storefront/MainComponent';

const Home: React.FC = () => (
  <MainComponet>
    <Head>
      <title>Create Next App</title>
    </Head>

    <main>
      <h1>Welcome to</h1>
    </main>
  </MainComponet>
);

export default Home;
