import './App.css';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch('https://jsonplaceholder.typicode.com/users')
      .finally(() => setLoading(false))
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(error => setError(error.toString()))
  }, [])

  return (
    <div className="App">
      {
        loading ? <CircularProgress /> :
          error ? <p style={{ color: 'red' }}>Error: { error }</p> :
          users.map(user => (
          <UserCard user={user} />
        ))
      }
    </div>
  );
}

export default App;
