import styles from './productInfo.module.css';

function ProductInfo() {
  return (
    <div className={styles.productInfo}>
      <div>
        <img
          className={styles.img}
          src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
          alt='kartinka'
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>Гамак “Красный бархат”</h2>
        <p className={styles.price}>3 000 руб</p>
        <h3 className={styles.podTitle}>Параметры:</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur.</p>
        <h3 className={styles.podTitle}>Материал:</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.</p>
        <h3 className={styles.podTitle}>Описание:</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla.</p>
        <button className={styles.button}>Купить за 3000 руб</button>
      </div>
    </div>
  );
}

export default ProductInfo;
