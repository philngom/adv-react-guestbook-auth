import { useState } from 'react';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
        name="email"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
        name="password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button>Sign In</button>
    </form>
  )
}
