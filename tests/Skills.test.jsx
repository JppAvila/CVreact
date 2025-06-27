import { render, screen, fireEvent } from '@testing-library/react';
import SkillsSection from '../src/components/Skills.jsx';

it('toggles complementary training modal', () => {
  render(<SkillsSection />);
  const openButton = screen.getByRole('button', { name: /Formación Complementaria/i });
  fireEvent.click(openButton);
  expect(screen.getByRole('heading', { name: /Formación Complementaria/i })).toBeInTheDocument();
  const closeButton = screen.getByLabelText(/cerrar modal/i);
  fireEvent.click(closeButton);
  expect(screen.queryByRole('heading', { name: /Formación Complementaria/i })).not.toBeInTheDocument();
});
