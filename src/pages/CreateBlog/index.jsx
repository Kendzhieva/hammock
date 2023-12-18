import styles from './createBlog.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { createBlog } from 'store/features/blogsSlice';


function CreateBlog() {

  const dispatch = useDispatch()

  useEffect(() => {

  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCreateBlog = async (data) => {
    dispatch(createBlog(data))
      .unwrap()
      .then(() => toast.success('Блог успешно создан'))
      .catch((error) => toast.error(error))
    reset()
  };

  return (
    <div className={styles.createBlog}>
      <div className='container'>
        <h2 className={styles.title}>Создание Блога</h2>
        <div className={styles.content}>
          <label className={styles.images}>
            <input type='file' multiple accept='img/*' />
            <img
              src={''}
              alt={''}
            />
          </label>

          <form onSubmit={handleSubmit(handleCreateBlog)}>
            <input
              className={styles.input}
              placeholder='Название'
              {...register('title')}
            />
            <textarea
              rows={'10'}
              className={styles.textarea}
              placeholder='Контент'
              {...register('content')}
            />
            <button type='submit' className={styles.button}>Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
