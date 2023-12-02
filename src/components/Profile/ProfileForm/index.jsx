import React from 'react';
import styles from './profileForm.module.css'

//icons
import { CiEdit } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'store/features/authSlise';
import { toast } from 'react-toastify';

function ProfileForm() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.authSlice)

  const handleEditUser = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const phone = e.target.phone.value

    dispatch(editUser({ email, phone }))
      .unwrap()
      .then(() => toast.success('ваши данные изменены'))
      .catch((error) => toast.error(error.message[0] + error.message[1]))
  }

  return (
    <section className={styles.profileForm}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.top}>
            <img
              className={styles.avatar}
              src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
              alt='AVATAR'
            />
          </div>
          <form className={styles.bottom} onSubmit={handleEditUser}>
            <p className={styles.name}>{user.fullName}</p>
            <p className={styles.info}>
              <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />E-mail:</p>
              <input
                className={styles.input}
                defaultValue={user.email}
                placeholder='01010101@gmail.com'
                name='email'
              />
            </p>

            <p className={styles.info}>
              <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Телефон:</p>
              <input
                className={styles.input}
                placeholder='8 (888) 888-88-88'
                name='phone'
                defaultValue={user.phone}
              />
            </p>

            <button className={styles.button} type='submit'>сохранить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfileForm;
