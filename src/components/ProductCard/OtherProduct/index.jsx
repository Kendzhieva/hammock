import Good from 'components/Good';
import styles from './otherProduct.module.css';
import { useEffect } from 'react';
import { getAllProduct } from 'store/features/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

function OtherProduct() {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.productsSlice)

  const productss = [products]

  console.log(products);

  useEffect(() => {
    dispatch(getAllProduct())

  }, [])

  return (
    <div>
      <h2 className={styles.title}>Другие товары</h2>
      <div className={styles.goods}>
        {productss && productss.map((product) => {
          return (
            <Good
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
