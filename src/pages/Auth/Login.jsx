import styles from './auth.module.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { authLogin } from 'store/features/authSlise';
import { Link } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch()

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
    const { confirmPassword, ...other } = data
    dispatch(authLogin(other))
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
          type='email'
          placeholder='E-mail'
          {...register('email')}
        />
        <input
          className={styles.input}
          type='password'
          placeholder='Пароль'
          {...register('password')}
        />
      </div>
      <Button className={styles.button}>Войти</Button>
      <p className={styles.other}>нет аккаунта, попробуй <span><Link to="/auth/register">Зарегистрироваться</Link></span></p>
    </form>
  );
};

export default Login;
