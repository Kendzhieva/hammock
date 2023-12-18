import Good from 'components/Good';
import styles from './otherProduct.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from 'store/features/productsSlice';

function OtherProduct() {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.productsSlice)


  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  return (
    <div>
      <h2 className={styles.title}>Другие товары</h2>
      <div className={styles.goods}>
        {products && products.map((product) => {
          return (
            <Good
              id={product.id}
              imgUrl={product.images || 'https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'}
              name={product.name}
              text={product.description}
              price={product.price}
            />
          )
        })}
      </div>
    </div>
  );
}

export default OtherProduct;
