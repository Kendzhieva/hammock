import styles from './auth.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'components/Button';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const loginSchema = yup.object().shape({
    username: yup.string().required('Обязательно напишите логин или почту'),
    password: yup.string().required('Обязательно напишите пароль'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(loginSchema) });

  function loginFormSubmit(data) {
    console.log(data);
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(loginFormSubmit)} className={styles.form}>
      <h2 className={styles.title}>Вход</h2>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder='Логин или E-mail'
          {...register('username')}
        />
        <input
          className={styles.input}
          type='password'
          placeholder='Пароль'
          {...register('password')}
        />
      </div>
      <Button className={styles.button}>Войти</Button>
    </form>
  );
};

export default Login;
