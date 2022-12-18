import { mocked } from 'jest-mock';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import { getServerSideProps } from '../pages/index';

jest.mock('next-auth/react');
const getSessionMocked = mocked(getSession);
describe('Home Page', () => {
  it('should redirect user to /login page when user is not authtenticated', async () => {
    getSessionMocked.mockResolvedValueOnce({
      user: {
        name: 'fake name',
        email: 'fake email',
        image: '/',
      },
      expires: 'fake-date',
    });
    const response = await getServerSideProps({} as GetServerSidePropsContext);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          session: {
            user: {
              name: 'fake name',
              email: 'fake email',
              image: '/',
            },
            expires: 'fake-date',
          },
        },
      })
    );
  });
  it('should redirect user to /login page when user is not authtenticated', async () => {
    getSessionMocked.mockResolvedValue(null);
    const response = await getServerSideProps({} as GetServerSidePropsContext);
    expect(response).toEqual(
      expect.objectContaining({
        redirect: {
          destination: '/login',
          permanent: false,
        },
      })
    );
  });
});
