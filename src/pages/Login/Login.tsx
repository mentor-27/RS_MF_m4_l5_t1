import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import { JDButton, JDTextInput } from '../../components/UI';
import { useAuth } from '../../context';

import styles from './Login.module.css';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  if (auth?.user) {
    return <Navigate to={location.state?.from || '/'} />;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    auth?.signin(name, () =>
      navigate(location.state?.from || '/', { replace: true })
    );
  };

  return (
    <>
      <h1 className={styles.caption}>Login</h1>
      <form className={styles.container} onSubmit={onSubmit}>
        <JDTextInput name="name" placeholder="Name" required />
        <JDButton type="submit">Login</JDButton>
      </form>
    </>
  );
};
