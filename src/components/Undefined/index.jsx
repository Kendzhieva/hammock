import styles from './undefined.module.css';
import UndefinedImg from 'assets/images/undefined.png'

function Undefined({ text, isButton = false }) {
  return (
    <div>
      <p className={styles.text}>{text}</p>
      <img
        className={styles.img}
        src={UndefinedImg}
        alt='kartinka'
      />
      {isButton && <button className={styles.button}>Посмотреть товары</button>}
    </div>
  );
}

export default Undefined;
