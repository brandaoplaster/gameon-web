import React from 'react';
import { useRouter } from 'next/router';
import MainComponet from '../components/Storefront/MainComponent';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponet>
      <button onClick={() => router.push('/Auth/Login')}>
        Login
      </button>

      <h1>Welcome to</h1>
    </MainComponet>
  )
}

export default Home;
