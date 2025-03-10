import { render, screen } from '@testing-library/react';
import { AvatarMenu } from '../../components/AvatarMenu';

describe('AvatarMenu Component', () => {
  it('debería renderizar correctamente', () => {
    render(<AvatarMenu />);
    const avatarImage = screen.getByAltText('User Avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveClass(
      'w-10',
      'h-10',
      'rounded-full',
      'cursor-pointer',
    );
  });
});
