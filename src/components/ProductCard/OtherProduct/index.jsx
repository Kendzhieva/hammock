import Good from 'components/Good';
import styles from './otherProduct.module.css';

function OtherProduct() {
  return (
    <div>
      <h2 className={styles.title}>Другие товары</h2>
      <div className={styles.goods}>
        <Good
          imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
          name="Гамак “Красный бархат”"
          text='Описание гамака, основные параметры, материал'
          price='4 000'
        />

        <Good
          imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
          name="Гамак “Красный бархат”"
          text='Описание гамака, основные параметры, материал'
          price='4 000'
        />

        <Good
          imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
          name="Гамак “Красный бархат”"
          text='Описание гамака, основные параметры, материал'
          price='4 000'
        />

        <Good
          imgUrl='https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg'
          name="Гамак “Красный бархат”"
          text='Описание гамака, основные параметры, материал'
          price='4 000'
        />
      </div>
    </div>
  );
}

export default OtherProduct;
