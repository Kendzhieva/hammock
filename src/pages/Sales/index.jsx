import { useSelector } from 'react-redux';
import styles from './sales.module.css'
import Good from 'components/Good';
import TrendMonth from 'components/TrendMonth';

const Sales = () => {
  const { products } = useSelector(state => state.productsSlice)
  return (
    <div className={styles.sales}>
      <div className='container'>
        <h2 className={styles.title}>Акции и предложения</h2>
        <div className={styles.products}>
          {
            products && products.filter((product) => product.price < 2000)
              .map((product) => {
                return (
                  <Good
                    imgUrl={product.images}
                    name={product.name}
                    text={product.description}
                    price={product.price}
                    isPresent={true}
                  />
                )
              })
          }
        </div>
        <TrendMonth />
      </div>
    </div>
  )
};

export default Sales;
