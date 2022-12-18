import { render } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { useSession, signIn } from 'next-auth/react';

import LoginComponent from './Login';

jest.mock('next-auth/react');
const useSessionMocked = mocked(useSession);

describe('Login component', () => {
  it('render correctly', () => {
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          email: 'johndoe@gmail.com',
          name: 'John Doe',
          image: '/',
        },
        expires: new Date().toISOString(),
      },
      status: 'authenticated',
    });
    expect(render(<LoginComponent />));
  });
});
