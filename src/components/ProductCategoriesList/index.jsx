import { useState } from 'react';
import styles from './productCategoriesList.module.css';
import { useSelector } from 'react-redux';

function ProductCategoriesList({ setActiveCategory, isAll = true }) {

  const { categories } = useSelector(state => state.categoriesSlice);
  const [activeLink, setActiveLink] = useState('Все');
  const links = isAll ? [{ name: 'Все' }, ...categories] : categories
  return (
    <div className={styles.links}>
      {links.map((link) => {
        return (
          <p
            key={link}
            className={activeLink === link.name ? styles.active_link : styles.link}
            onClick={() => {
              setActiveLink(link.name);
              setActiveCategory(link.name);
            }}
          >
            {link.name}
          </p>
        )
      })}
    </div>
  );
}

export default ProductCategoriesList;
