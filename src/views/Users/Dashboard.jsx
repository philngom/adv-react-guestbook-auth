import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';

export default function dashboard() {

  useEffect(() => {
    // const fetchEntries =
  }, []);

  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  return (
    <h1>Welcome to the dashboard</h1>
    <label>
      Add an entry:
      <input
      value={entry}
      />
    </label>
    {
      entries.map((entry) => <p>{entry.entry}</p>)
    }
  )
}
