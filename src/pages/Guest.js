import { Link } from 'react-router-dom';
import { Title } from '../components';

const Guest = () => {
  return (
    <>
      <Title />
      <div className="guest message">
        <Link to="/user">Login</Link> to add photos.
      </div>
    </>
  );
}

export default Guest;
