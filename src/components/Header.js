import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/guest">Preview</Link></li>
        <li><Link to="/user">Sign In</Link></li>
      </ul>
    </div>
  )
}

export default Header;