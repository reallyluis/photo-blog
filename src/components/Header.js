import { Link, useLocation } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { useAuth } from '../hooks/useAuth';

import './Header.css';

const Header = () => {
  const { isSignedIn=false } = useAuth();
  const { pathname } = useLocation();

  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        { isSignedIn &&
          <>
            <li><Link to="/admin">Admin</Link></li>
            <li><AmplifySignOut /></li>
          </>
        }
        { !isSignedIn &&
          <>
            <li><Link to="/guest">Preview</Link></li>
            { pathname !== '/signin' &&
              <li><Link to="/signin">Sign in</Link></li>
            }
          </>
        }
      </ul>
    </div>
  )
}

export default Header;
