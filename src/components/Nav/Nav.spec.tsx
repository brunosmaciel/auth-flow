import { render, screen } from '@testing-library/react';

import Nav from './Nav';

describe('Navbar component', () => {
  it('render correctly when user isn`t authtenticated', () => {
    const { getByRole, debug } = render(<Nav />);
    expect(getByRole('profile-icon')).toBeInTheDocument();
  });
  it('should render user profile picture when authtenticated', () => {
    render(
      <Nav
        session={{
          user: {
            email: 'fake-email',
            image: '/',
            name: 'fake-name',
          },
        }}
      />,
    );

    expect(screen.getByAltText('userAvatar')).toBeInTheDocument();
  });
});
