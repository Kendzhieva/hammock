import { Link, Outlet } from 'react-router-dom';
import styles from './modalAuth.module.css';
import { useEffect, useState } from 'react';
import { ReactComponent as VKLogo } from 'assets/icons/auth/vk.svg';
import { ReactComponent as FacebookLogo } from 'assets/icons/auth/facebook.svg';
import { ReactComponent as GoogleLogo } from 'assets/icons/auth/google.svg';
import Modal from 'components/Modal';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';


function ModalAuth({ isOpen, setIsOpen }) {
  const [authType, setAuthType] = useState('login')
  const { user } = useSelector(state => state.authSlice)
  useEffect(() => {
    if (user) {
      setIsOpen(false)
    }
  }, [user])


  const AuthFormComponent = authType === 'login' ? Login : Register

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles.external}>
        <AuthFormComponent setAuthType={setAuthType} />
        <div className={styles.methods}>
          <p className={styles.methodsTitle}>Или войдите через</p>
          <div className={styles.methodsWrapper}>
            <VKLogo className={styles.methodsItem} />
            <FacebookLogo className={styles.methodsItem} />
            <Link to="http://localhost:4430/auth/google/login"><GoogleLogo className={styles.methodsItem} /></Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAuth;
