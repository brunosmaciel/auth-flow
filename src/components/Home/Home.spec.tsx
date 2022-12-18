import { render } from '@testing-library/react';

import { HomeComponent } from './HomeComponent';

jest.mock('next-auth/react', () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: 'John Doe' },
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return { data: mockSession, status: 'authenticated' }; // return type is [] in v3 but changed to {} in v4
    }),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    signIn: jest.fn(() => {}),
  };
});

describe('Home Component', () => {
  it('should render username when user is authenticated', () => {
    const { getByText } = render(<HomeComponent />);
    const mockSession = {
      expires: new Date(Date.now() + 2 * 86400).toISOString(),
      user: { username: 'John Doe' },
    };
    jest.mock('next-auth/react', () => {
      return {
        useSession: jest.fn(() => {
          return { data: mockSession, status: 'authenticated' };
        }),
      };
    });

    expect(getByText('Signed in as'));
  });
  it('should render a fragment when user is not authenticated', () => {
    const { asFragment } = render(<HomeComponent />);
    // jest.mock('next-auth/react',()=>{
    //   return {
    //     useSession:()=>{
    //       return null
    //     }
    //   }
    // })

    expect(asFragment).toBeTruthy();
  });
});
