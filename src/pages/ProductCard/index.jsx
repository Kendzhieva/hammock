import OtherProduct from 'components/OtherProduct';
import ProductInfo from 'components/ProductCard/ProductInfo';
import TrendMonth from 'components/TrendMonth';
import styles from './productCard.module.css';

function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div className='container'>
        <ProductInfo />
        <OtherProduct />
        <TrendMonth />
      </div>
    </div>
  );
}

export default ProductCard;