import { render } from '@testing-library/react';

import { Loading } from './Loading';

describe('Loading Component', () => {
  it('render loading screen correctly', () => {
    // ARRANGE
    const { getByText } = render(<Loading isLoading={true} />);

    expect(getByText('Loading...')).toBeTruthy();
  });
  it('render fragment correctly', () => {
    const { asFragment } = render(<Loading isLoading={false} />);
    expect(asFragment);
  });
});
