import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import './Header.css';

const Header = () => {
  const { isSignedIn=false } = useAuth();

  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        { isSignedIn && <li><Link to="/user">Sign Out</Link></li> }
        { !isSignedIn &&
          <>
            <li><Link to="/guest">Preview</Link></li>
            <li><Link to="/user">Sign In</Link></li>
          </>
        }
      </ul>
    </div>
  )
}

export default Header;
