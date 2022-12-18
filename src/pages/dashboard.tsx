import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { DashboardComponent } from '../components/Dashboard/Dashboard';

const Dashboard = () => {
  return <DashboardComponent />;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: '/',
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
