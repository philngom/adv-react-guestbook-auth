import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

export default function dashboard() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);
  const { logout } = useUser();

  useEffect(() => {
    // const fetchEntries =
  }, []);


  return (
    <>
    <h1>Welcome to the dashboard</h1>
    <button onClick={logout}>Logout</button>
    <label>
      Add an entry:
      <input
      value={entry}
      onChange={e => setEntry(e.target.value)}
      />
    </label>
    {
      entries.map((entry) => <p>{entry.entry}</p>)
    }
    </>
  )
}
