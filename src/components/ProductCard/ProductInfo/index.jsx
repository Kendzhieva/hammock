import { useParams } from 'react-router-dom';
import styles from './productInfo.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from 'store/features/productsSlice';

function ProductInfo() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { product } = useSelector(state => state.productsSlice)
  useEffect(() => {
    dispatch(getOneProduct(productId))
  }, [productId])

  return (
    <div className={styles.productInfo}>
      <div>
        <img
          className={styles.img}
          src={product?.images || 'https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'}
          alt='kartinka'
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.price}>{product.price} руб</p>
        {/* <h3 className={styles.podTitle}>Параметры:</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur.</p>
        <h3 className={styles.podTitle}>Материал:</h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.</p> */}
        <h3 className={styles.podTitle}>Описание:</h3>
        <p className={styles.text}>{product.description}</p>
        <button className={styles.button}>Купить за {product.price} руб</button>
      </div>
    </div>
  );
}

export default ProductInfo;
