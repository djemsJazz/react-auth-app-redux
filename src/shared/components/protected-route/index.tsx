import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../../store/store';

type Props = {
  children: ReactNode,
}

const ProtectedRoute = ({ children }: Props) => {
   const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? children : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedRoute;
