import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, signUp } = useUser();
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);

      const url = location.state.origin ? location.state.origin.pathname : '/';

      history.replace(url);

    } catch (error) {
       setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
        name="email"
        type="text"
        value={email}
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button>Sign In</button>
      <p>{error}</p>
    </form>
  )
}
