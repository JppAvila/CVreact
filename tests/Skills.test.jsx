import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SkillsSection from '../src/components/Skills.jsx';

describe('SkillsSection modal', () => {
  test('shows and hides FormacionComplementaria modal', async () => {
    render(<SkillsSection />);
    const openButton = screen.getByRole('button', { name: /formaci\u00f3n complementaria/i });
    await userEvent.click(openButton);

    const heading = await screen.findByRole('heading', { name: /formaci\u00f3n complementaria/i });
    expect(heading).toBeInTheDocument();

    const closeButton = within(heading.parentElement).getByRole('button');
    await userEvent.click(closeButton);

    expect(screen.queryByRole('heading', { name: /formaci\u00f3n complementaria/i })).toBeNull();
  });

});
