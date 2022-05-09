import { useState } from 'react';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button>Sign In</button>
    </form>
  )
}
