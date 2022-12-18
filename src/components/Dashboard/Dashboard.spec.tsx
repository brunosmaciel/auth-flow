import { render, screen } from '@testing-library/react';
import { DashboardComponent } from './Dashboard';
import userEvent from '@testing-library/user-event';
import { signOut } from 'next-auth/react';

jest.mock('next-auth/react', () => {
  return {
    useSession: jest.fn(() => {
      return {
        data: {
          session: {
            user: {
              email: 'fake-mail',
              name: 'fake-name',
              image: '/',
            },
          },
        },
      };
    }),
    signOut: jest.fn(() => {}),
  };
});
describe('Dashboard Component', () => {
  it('should log out the user when the button is clicked', async () => {
    render(<DashboardComponent />);

    const logOutButton = screen.getByText('Log out');

    await userEvent.click(logOutButton);

    expect(signOut).toHaveBeenCalled();
  });
});
