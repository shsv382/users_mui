import CircularProgress from '@mui/material/CircularProgress';
import PhotoCard from './PhotoCard';
import useFetch from '../hooks/useFetch';
import './Photos.css';

function Photos() {
  const { data, error } = useFetch('https://jsonplaceholder.typicode.com/photos');
  
  return (
    <div className='photos'>
      {
        (!data && !error) ? <CircularProgress /> :
          error ? <p style={{ color: 'red' }}>Error: { error.toString() }</p> :
          data.map(photo => (
          <PhotoCard key={"photo" + photo.id} title={photo.title} url={photo.url} />
        ))
      }
    </div>
  );
}

export default Photos;
