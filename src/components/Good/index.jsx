import styles from './good.module.css';
import { CgClose } from "react-icons/cg";

const Good = ({ imgUrl, name, text, price, remove, }) => (

  <div className={styles.good}>
    <div className={styles.info}>
      <img
        src={imgUrl}
        alt="kartinka"
        className={styles.img} />
      <h5 className={styles.name}>{name}</h5>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price} руб</p>
    </div>
    {remove ? <button className={styles.button_delete}><CgClose size={'15px'} /></button> : <></>}
  </div>
);

export default Good;
