import styles from './good.module.css';
import { CgClose } from "react-icons/cg";
import presentIcon from 'assets/icons/catalog/present.svg';

const Good = ({ imgUrl, name, text, price, isRemove = false, isPresent = false }) => (

  <div className={styles.good}>
    {isPresent ? <img
      src={presentIcon}
      alt=''
      className={styles.present}
    /> : null
    }
    <div className={styles.info}>
      <img
        src={imgUrl}
        alt="kartinka"
        className={styles.img} />
      <h5 className={styles.name}>{name}</h5>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price} руб</p>
      <div />
    </div>
    {isRemove ? <button className={styles.button_delete}><CgClose size={'15px'} /></button> : null}
  </div>
);

export default Good;
