import React from 'react';
import { useState } from 'react';
//styles
import styles from './Authorization.module.css';


const Login = ({ setAuthType }) => {
  const switchAuth = () => {
    setAuthType('register');
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Вход</h3>

      <input
        className={styles.input}
        type="text"
        placeholder="Логин или E-mail"

      />
      <input
        className={styles.input}
        type="text"
        placeholder="Пароль"

      />

      <button className={styles.button}>Вход</button>
      <p className={styles.switch}>
        Создайте аккаунт, <span onClick={switchAuth}>Регистрация</span>
      </p>
    </form>
  );
};

const Register = ({ setAuthType }) => {
  const switchAuth = () => {
    setAuthType('login');
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Регистрация</h3>

      <input
        className={styles.input}
        type="text"
        placeholder="Логин"

      />
      <input
        className={styles.input}
        type="text"
        placeholder="ФИО"

      />
      <input
        className={styles.input}
        type="email"
        placeholder="E-mail"

      />
      <input
        className={styles.input}
        type="phone"
        placeholder="Телефон"

      />
      <input
        className={styles.input}
        type="password"
        placeholder="Пороль"
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Проверить пороль"

      />
      <button className={styles.button}>Регистрация</button>
      <p className={styles.switch}>
        Есть аккаунт, тогда совершите <span onClick={switchAuth}>Вход</span>
      </p>
    </form >
  );
};

////////

const Authorization = () => {
  const [authType, setAuthType] = useState('login');

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className={styles.content}>
          {authType === 'login' && (
            <Login setAuthType={setAuthType} />
          )}
          {authType === 'register' && (
            <Register setAuthType={setAuthType} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Authorization;


