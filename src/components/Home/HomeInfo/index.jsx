import styles from './homeInfo.module.css';
import Hammok from 'assets/images/home/hammok.png'

function HomeInfo() {
  return (
    <section className={styles.homeInfo}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>О нас</h2>
          <p className={styles.text}>Пять лет назад мы впервые открыли для себя эту прекрасную вещь для использования в своих походах по Краснодарскому краю и теперь мы с радостью предлагаем Вам насладиться отдыхом на этом надежном гамаке и оценить его по достоинству. Мы производим его из лент ПВХ, с использованием капроновой нити. Это делает гамак долговечными и надежными. Для устройства каркаса гамака мы предлагаем выбор между древесиной, которой обрабатываем специальной пропиткой для защиты от влаги и алюминиевым каркасом. Ширину гамака шьем на выбор от 1м до 1,4м, но количество ограниченно, т.к. много отшивать не получается. Цветовая гамма постоянно меняется, т.к. мы приобретаем ленты ПВХ только те, что есть в наличие у наших поставщиков. Поэтому если Вы не нашли расцветки, которая бы вас устроила, можете заходить к нам на сайт спустя определенное время, возможно скоро она появится именно на Ваш вкус.</p>
          <p className={styles.text}>Все гамаки шьются и крепятся на каркас вручную. Мы следим за качеством каждого произведенного нами товара и стараемся чтобы вы получали только положительные эмоции от хороших вещей. Ведь удовольствие от хорошего качества длится дольше, чем радость от низкой цены.</p>
        </div>
        <img
          className={styles.img}
          src={Hammok}
          alt='kartinka'
        />
      </div>

    </section>
  );
}

export default HomeInfo;
