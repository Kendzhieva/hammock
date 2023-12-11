import CatalogBlock from "components/Catalog/CatalogBlock";
import ProductCategoriesList from "components/ProductCategoriesList";
import styles from './catalog.module.css'
import TrendMonth from "components/TrendMonth";


const Catalog = () => {
  const products = [
    {
      img: "https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg",
      name: "Гамак “Лисичка”",
      text: 'Описание гамака, основные параметры, материал',
      price: 4200
    },
    {
      img: "https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg",
      name: "Гамак “Лисичка”",
      text: 'Описание гамака, основные параметры, материал',
      price: 4200
    },
    {
      img: "https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg",
      name: "Гамак “Лисичка”",
      text: 'Описание гамака, основные параметры, материал',
      price: 4200
    },
    {
      img: "https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg",
      name: "Гамак “Лисичка”",
      text: 'Описание гамака, основные параметры, материал',
      price: 4200
    },
  ]
  return (
    <div className={styles.catalog}>
      <div className="container">
        <h2 className={styles.title}>Каталог</h2>
        <ProductCategoriesList />
        <CatalogBlock title={'Гамаки'} products={products} />
        <TrendMonth />
      </div>
    </div>
  )

};

export default Catalog;
