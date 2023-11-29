import styles from './auth.module.css';

import { ReactComponent as VKLogo } from 'assets/icons/auth/vk.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/auth/facebook.svg';
import { ReactComponent as GoogleLogo } from 'assets/icons/auth/google.svg';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const AuthLayout = () => {

  const navigate = useNavigate()

  const { user, status, error } = useSelector(state => state.authSlice)

  useEffect(() => {

    if (status === 'success') {
      navigate('/')
    }

  }, [user])


  return (
    <div className='container'>
      <div className={styles.content}>
        <div className={styles.external}>
          <Outlet />
          <div className={styles.methods}>
            <p className={styles.methodsTitle}>Или войдите через</p>
            <div className={styles.methodsWrapper}>
              <VKLogo className={styles.methodsItem} />
              <FacebookLogo className={styles.methodsItem} />
              <Link to="http://localhost:4430/auth/google/login"><GoogleLogo className={styles.methodsItem} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
