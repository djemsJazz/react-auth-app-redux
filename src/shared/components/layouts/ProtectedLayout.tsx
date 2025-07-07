import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

const ProtectedLayout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? <Outlet /> : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedLayout;
