import React, { useState } from 'react';
import styles from './profileForm.module.css'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, editUser } from 'store/features/authSlice';

//icons
import { MdEdit } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

function ProfileForm() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.authSlice)

  const [avatar, setAvatar] = useState(null)

  const handleChangeAvatar = (e) => {
    const blobUrl = e.target.files[0]
    dispatch(changeAvatar(blobUrl))
      .unwrap()
      .then((data) => toast.success(data.message))
      .catch((error) => toast.error(error.message))
  }

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
            <label className={styles.avatar}>
              <input type='file' accept='img/*' onChange={handleChangeAvatar} />
              <img
                src={user.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD6P7fvoMX8ZLb9MAVnLMIPJblEBYXx-X-kv_d9GPJVfQFtCSKQIGEYAoAzOk2AR7kJEg&usqp=CAU"}
                alt='AVATAR'
              />
            </label>
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
              <MdEdit size={'50px'} />
            </p>

            <p className={styles.info}>
              <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Телефон:</p>
              <input
                className={styles.input}
                placeholder='8 (888) 888-88-88'
                name='phone'
                defaultValue={user.phone}
              />
              <MdEdit size={'50px'} />
            </p>

            <button className={styles.button} type='submit'>сохранить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfileForm;
