import styles from './deliveryMap.module.css';

function DeliveryMap() {
  return (
    <div className={styles.deliveryMap}>
      <div className={styles.map}>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4567.617794440553!2d74.57996196253731!3d42.87368580510441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec821747d714f%3A0x9adde5864f3f1f04!2sSIERRA%20Coffee%20Manas%20Ave!5e0!3m2!1sru!2skg!4v1702377203901!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Адрес:</h3>
        <p className={styles.text}>935902, Россия, Новороссийск, ул. Сухумское шоссе 80</p>
      </div>
    </div>
  );
}

export default DeliveryMap;
