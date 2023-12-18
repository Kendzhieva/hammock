import styles from './homeProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Good from 'components/Good';
import { getCategories } from 'store/features/categoriesSlice';
import { getAllProducts } from 'store/features/productsSlice';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function HomeProduct() {
  const { products } = useSelector(state => state.productsSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getAllProducts())
  }, [])
  let i = 0
  return (
    <section className={styles.homeProduct}>
      <div className={styles.top}>
        <h2 className={styles.title}>Товары</h2>
      </div>
      <div className={styles.down}>
        {
          products.filter((product, idx) => idx < 4).map((product) => {
            return (
              <Good
                imgUrl={product.images}
                name={product.name}
                text={product.description}
                price={product.price}

              />
            )
          })
        }
      </div>
      <Link to={'/catalog'} className={styles.all}>Ещё <MdKeyboardArrowRight color='#2d7033' size={'20px'} /></Link>
    </section>
  );
}

export default HomeProduct;
