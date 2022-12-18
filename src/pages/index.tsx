import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { HomeComponent } from '../components/Home/HomeComponent';

const Home: NextPage = () => {
  return <HomeComponent />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
