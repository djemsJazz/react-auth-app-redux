import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../../store/slices/auth';
import { useAppDispatch } from '../../../store/hooks';


const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const origin = searchParams.get('origin');

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    const userPayload: IUser = { id: "1", name: 'Djamel', email: "email@gmail.com", phoneNumber: '514-944-3147', birthday: '02-07-1992' };
    dispatch(login(userPayload));
    navigate(origin ? origin : '/');
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={handleLogin}>Click To Login</button>
    </div>
  );
};

export default LoginPage;
