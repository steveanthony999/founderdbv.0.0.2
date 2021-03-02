import { useHistory, NavLink } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  const history = useHistory();

  const logoutUser = async () => {
    await logout();
    history.push('/login');
  };

  return (
    <nav>
      <div id='inner-nav'>
        <NavLink to='/' id='nav-logo'>
          Logo
        </NavLink>
        <div id='nav-links'>
          <NavLink to='/founders'>FOUNDERS</NavLink>
          {user ? (
            <>
              <p>{user.displayName && user.displayName.toUpperCase()}</p>
              <p onClick={logoutUser}>LOG OUT</p>
            </>
          ) : (
            <>
              <NavLink to='/login'>LOG IN</NavLink>
              <p>|</p>
              <NavLink to='/signup'>SIGN UP</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
