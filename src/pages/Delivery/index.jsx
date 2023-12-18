import DeliveryForm from 'components/Delivery/DeliveryForm';
import styles from './delivery.module.css'
import DeliveryMap from 'components/Delivery/DeliveryMap';
import TrendMonth from 'components/TrendMonth';

const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <div className='container'>
        <h2 className={styles.title}>Доставка и оплата</h2>
        <div className={styles.info}>
          <DeliveryForm />
          <DeliveryMap />
        </div>
        <TrendMonth />
      </div>

    </div>
  )
};

export default Delivery;
