import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from '../src/components/About.jsx';

describe('About modal', () => {
  test('shows and hides diploma modal', async () => {
    render(<About />);
    const openButton = screen.getByRole('button', { name: /formaci\u00f3n acad\u00e9mica/i });
    await userEvent.click(openButton);

    const img = await screen.findByAltText(/diploma dam c\u00e1mara de comercio/i);
    expect(img).toBeInTheDocument();

    const closeButton = within(img.parentElement).getByRole('button');
    await userEvent.click(closeButton);

    expect(screen.queryByAltText(/diploma dam c\u00e1mara de comercio/i)).toBeNull();
  });
});
