import { useState, useEffect } from 'react';
import { useUser } from '../../context/UserContext';
import { getEntries, createEntry } from '../../services/entries';
import { useHistory } from 'react-router-dom';


export default function dashboard() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);
  const { logout, user } = useUser();
  let history = useHistory();

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
      const data = await getEntries();
      setEntries(data);
  }

  const handleLogout = () => {
    logout();
    history.replace('/');

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEntry({ userId: user.id, entry: user.email + ' ---> ' + entry });
    setEntry('');
    await fetchEntries();
  }


  return (
    <>
    <h1>Welcome to the dashboard</h1>
    <h5>Currently logged in as {user.email}</h5>
    <button onClick={handleLogout}>Logout</button>
    <form onSubmit={handleSubmit}>
      <label>
        Add an entry:
        <input
        value={entry}
        onChange={e => setEntry(e.target.value)}
        />
      </label>
      <button type="submit">Submit entry</button>
    </form>
    <ul>
      {
        entries.map((entry) => <li>{entry.content}</li>)
      }
    </ul>
    </>
  )
}
