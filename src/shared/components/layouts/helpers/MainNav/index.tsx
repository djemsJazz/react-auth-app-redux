import { NavLink } from 'react-router-dom';
import styles from './main-nav.module.css';
import ProtectedLink from '../../../protected-link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { logout } from '../../../../../store/slices/auth';

const MainNav = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <nav className={styles.nav}>
      <p>AppLayout NAV</p>
      <menu className={styles.menu}>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/" end>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/users" end>Users</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/users/create" end>Create User</NavLink>
        <ProtectedLink inNav className={({ isActive }) => isActive ? styles.active : undefined} to="/profile" end>Profile</ProtectedLink>
        {(isAuthenticated) ? <button onClick={handleLogout}>Logout</button> : (
          <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/login" end>
            <button >login</button>
          </NavLink>
        )}
      </menu>
    </nav>
  );
};

export default MainNav;
