import styles from './auth.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authRegister } from 'store/features/authSlise';
import { Link } from 'react-router-dom';

const Register = () => {

  const dispatch = useDispatch()
  const registerSchema = yup.object().shape({
    username: yup.string().required('Обязательно напишите логин'),
    email: yup
      .string()
      .required('Обязательно напишите почту')
      .email('Введите корректную почту'),
    password: yup
      .string()
      .required('Обязательно напишите пароль')
      .min(8, 'Длина пароля должна быть более 8 символов')
      .max(16, 'Длина пароля должна быть менее 16 символов')
      .matches(
        /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/,
        'Пароль должен содержать хотя бы одну цифру и хотя бы одну заглавную букву'
      ),
    confirmPassword: yup
      .string()
      .required('Обязательно напишите пароль подтверждения')
      .oneOf([yup.ref('password'), null], 'Ваши пароли не совпадают'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(registerSchema) });

  function registerFormSubmit(data) {
    const { confirmPassword, ...other } = data
    dispatch(authRegister(other))
  }

  useEffect(() => {
    const arrayOfErrors = Object.values(errors);
    if (arrayOfErrors.length) {
      const message = arrayOfErrors.reduce((acc, rec) => {
        return (acc += `${rec.message}\n`);
      }, '');

      toast.error(message);
    }
  }, [errors]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(registerFormSubmit)}>
      <h2 className={styles.title}>Регистрация</h2>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type='text'
          placeholder='Логин'
          {...register('username')}
        />
        <input className={styles.input} type='text' {...register('fullName')} placeholder='ФИО' />
        <input
          className={styles.input}
          type='mail'
          placeholder='E-mail'
          {...register('email')}
        />
        <input className={styles.input} type='tel' {...register('phone')} placeholder='Телефон' />
        <input
          className={styles.input}
          type='password'
          placeholder='Пароль'
          {...register('password')}
        />
        <input
          className={styles.input}
          type='password'
          placeholder='Повторите пароль'
          {...register('confirmPassword')}
        />
      </div>
      <Button className={styles.button}>Зарегестрировать</Button>
      <p className={styles.other}>есть аккаунта, попробуй <Link to="/auth/login">Войти</Link></p>
    </form>
  );
};

export default Register;
