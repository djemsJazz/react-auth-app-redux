import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

type Props = {
  children: ReactNode,
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? children : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedRoute;
