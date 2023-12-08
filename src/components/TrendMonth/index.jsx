import styles from './trendMonth.module.css';

function TrendMonth() {
  return (
    <div className={styles.trendMonth}>
      <img
        src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
        alt='kartinochka'
        className={styles.img}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>Тренд месяца</h3>
        <p className={styles.text}>В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!</p>
        <button className={styles.button}>Подробнее</button>
      </div>
    </div>
  );
}

export default TrendMonth;
