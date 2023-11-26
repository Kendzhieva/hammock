import styles from './auth.module.css';

import { ReactComponent as VKLogo } from 'assets/icons/auth/vk.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/auth/facebook.svg';
import { ReactComponent as GoogleLogo } from 'assets/icons/auth/google.svg';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
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
              <GoogleLogo className={styles.methodsItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
