import ProfileForm from 'components/Profile/ProfileForm';
import styles from './profile.module.css';

function Profile() {
  return (
    <>
      <div className={styles.header}>
        <div className='container'>
          <h2 className={styles.title}>Личный кабинет</h2>
        </div>
      </div>
      <ProfileForm />
    </>
  );
}

export default Profile;
