import Good from 'components/Good';
import styles from './catalogBlock.module.css';

function CatalogBlock({ category, products }) {
  return (
    <section className={styles.catalogBlock}>
      <h3 className={styles.title}>{category}</h3>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <Good
              imgUrl={product.img}
              name={product.name}
              text={product.text}
              price={product.price}
              remove={false}
            />
          )
        })}
      </div>
    </section>
  );
}

export default CatalogBlock;
