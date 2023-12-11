import { useState } from 'react';
import styles from './card.module.css';
import Good from 'components/Good';

//icons
import { CgClose } from "react-icons/cg";
import ProductCategoriesList from 'components/ProductCategoriesList';


function Card() {

  return (
    <div className={styles.card}>
      <div className='container'>
        <div className={styles.content}>
          <h2 className={styles.title}>Корзина</h2>

          <ProductCategoriesList />




          <div className={styles.blocks}>

            <Good
              imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
              name="Гамак “Красный бархат”"
              text='Описание гамака, основные параметры, материал'
              price='4 000'
              isRemove={true}
            />

            <Good
              imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
              name="Гамак “Красный бархат”"
              text='Описание гамака, основные параметры, материал'
              price='4 000'
              isRemove={true}
            />

            <Good
              imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
              name="Гамак “Красный бархат”"
              text='Описание гамака, основные параметры, материал'
              price='4 000'
              isRemove={true}
            />

            <Good
              imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
              name="Гамак “Красный бархат”"
              text='Описание гамака, основные параметры, материал'
              price='4 000'
              isRemove={true}
            />
          </div>




          <button className={styles.button}>Купить за 11500 $</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
