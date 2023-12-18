import styles from './deliveryForm.module.css';

function DeliveryForm() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type='text'
        placeholder='Укажите ваше ФИО'
      />
      <input
        className={styles.input}
        type='text'
        placeholder='8 (888) 888-88-88'
      />
      <input
        className={styles.input}
        type='text'
        placeholder='г.Москва, ул. Советская 16'
      />
      <input
        className={styles.input}
        type='text'
        placeholder='Выберите способ оплаты'
      />

      <button className={styles.button}>Заказать доставку</button>

    </form>
  );
}

export default DeliveryForm;
