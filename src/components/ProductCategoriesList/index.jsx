import { useState } from 'react';
import styles from './productCategoriesList.module.css'

function ProductCategoriesList() {
  const links = ['Все товары', 'Гамаки', 'Чехлы', 'Крепеж']

  const [activeLink, setActiveLink] = useState('Все товары')
  return (
    <div className={styles.links}>
      {links.map((link) => {
        return (
          <p
            className={activeLink === link ? styles.active_link : styles.link}
            onClick={() => setActiveLink(link)}
          >{link}</p>
        )
      })}
    </div>
  );
}

export default ProductCategoriesList;
