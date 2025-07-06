import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Link, type LinkProps, NavLink, type NavLinkProps } from 'react-router-dom';
import { RootState } from '../../../store/store';

type MainProps = {
  inNav?: boolean,
  children: ReactNode,
}

type Props = (MainProps & NavLinkProps) | (MainProps & NavLinkProps)

const ProtectedLink: React.FC<Props> = ({ children, inNav = false, to, ...rest }) => {
   const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  if (!isAuthenticated) return null;
  if (inNav) {
    return (
      <NavLink to={to} {...(rest as NavLinkProps)}>{children}</NavLink>
    );
  }
  return (
    <Link to={to} {...(rest as LinkProps)}>{children}</Link>
  );
};

export default ProtectedLink;
