import { NavLink } from 'react-router-dom';
import styles from './main-nav.module.css';
import ProtectedLink from '../../../protected-link';
import { logout } from '../../../../../store/slices/auth';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';

const MainNav = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const { isAuthenticated } = useAppSelector((state) => state.auth);
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
