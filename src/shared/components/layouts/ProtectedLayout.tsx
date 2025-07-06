import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { RootState } from '../../../store/store';


const ProtectedLayout = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? <Outlet /> : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedLayout;
