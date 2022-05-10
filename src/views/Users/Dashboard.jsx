import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { getEntries, createEntry } from '../../services/entries';
import { useHistory } from 'react-router-dom';


export default function dashboard() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);
  const { logout } = useUser();
  let history = useHistory();

  useEffect(() => {
    // const fetchEntries = async () => {
        // const data = await getEntries();
    // }
  }, []);

  const handleLogout = () => {
    logout();
    history.replace('/');

  }


  return (
    <>
    <h1>Welcome to the dashboard</h1>
    <button onClick={handleLogout}>Logout</button>
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
