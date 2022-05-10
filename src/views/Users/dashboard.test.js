import App from '../../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import { screen, render } from '@testing-library/react';

describe('App', () => {
  it('should be able to add an entry and view all entries', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const dashboardLink = screen.getByRole('link', { name: /view dashboard/i });

    userEvent.click(dashboardLink);

    const emailInput = screen.getByRole('textbox', { name: /email:/i });
    const passwordInput = screen.getByLabelText(/password:/i);
    const loginButton = screen.getByRole('button', { name: /sign in/i });

    userEvent.type(emailInput, 'ude@hdew.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(loginButton);

    await screen.findByText(/welcome to the dashboard/i);

    screen.debug();
  });
});
