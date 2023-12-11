import Good from 'components/Good';
import styles from './catalogBlock.module.css';

function CatalogBlock({ title, products }) {
  return (
    <section className={styles.catalogBlock}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <Good
              imgUrl={product.img}
              name={product.name}
              text={product.text}
              price={product.price}
              isPresent={true}
            />
          )
        })}
      </div>
    </section>
  );
}

export default CatalogBlock;
