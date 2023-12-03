import { useState } from 'react';
import styles from './card.module.css';

//icons
import { CgClose } from "react-icons/cg";


function Card() {

  const links = ['Все товары', 'Гамаки', 'Чехлы', 'Крепеж']

  const [activeLink, setActiveLink] = useState('Все товары')

  return (
    <div className={styles.card}>
      <div className='container'>
        <div className={styles.content}>
          <h2 className={styles.title}>Корзина</h2>
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




          <div className={styles.blocks}>
            <div className={styles.block}>
              <div className={styles.info}>
                <img
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='kartinka'
                  className={styles.img} />
                <h5 className={styles.name}>Гамак “Красный бархат”</h5>
                <p className={styles.text}>Описание гамака, основные параметры, материал</p>
                <p className={styles.price}>4 000 руб</p>
              </div>
              <button className={styles.button_delete}><CgClose size={'15px'} /></button>
            </div>

            <div className={styles.block}>
              <div className={styles.info}>
                <img
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='kartinka'
                  className={styles.img} />
                <h5 className={styles.name}>Гамак “Красный бархат”</h5>
                <p className={styles.text}>Описание гамака, основные параметры, материал</p>
                <p className={styles.price}>4 000 руб</p>
              </div>
              <button className={styles.button_delete}><CgClose size={'15px'} /></button>
            </div>

            <div className={styles.block}>
              <div className={styles.info}>
                <img
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='kartinka'
                  className={styles.img} />
                <h5 className={styles.name}>Гамак “Красный бархат”</h5>
                <p className={styles.text}>Описание гамака, основные параметры, материал</p>
                <p className={styles.price}>4 000 руб</p>
              </div>
              <button className={styles.button_delete}><CgClose size={'15px'} /></button>
            </div>

            <div className={styles.block}>
              <div className={styles.info}>
                <img
                  src='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
                  alt='kartinka'
                  className={styles.img} />
                <h5 className={styles.name}>Гамак “Красный бархат”</h5>
                <p className={styles.text}>Описание гамака, основные параметры, материал</p>
                <p className={styles.price}>4 000 руб</p>
              </div>
              <button className={styles.button_delete}><CgClose size={'15px'} /></button>
            </div>
          </div>




          <button className={styles.button}>Купить за 11500 $</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
