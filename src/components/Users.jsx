import CircularProgress from '@mui/material/CircularProgress';
import UserCard from './UserCard';
import useFetch from '../hooks/useFetch';
import './Users.css';

function Users() {
  const { data, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  return (
    <div className='users'>
      {
        (!data && !error) ? <CircularProgress /> :
          error ? <p style={{ color: 'red' }}>Error: { error.toString() }</p> :
          data.map(user => (
          <UserCard user={user} />
        ))
      }
    </div>
  );
}

export default Users;
