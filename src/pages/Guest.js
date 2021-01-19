import { Link } from 'react-router-dom';

const Guest = () => {
  return (
    <div className="guest message">
      <Link to="/user">Login</Link> to add photos.
    </div>
  );
}

export default Guest;
