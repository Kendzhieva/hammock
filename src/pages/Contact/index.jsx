import styles from './contact.module.css';

//icons
import { IoLogoWhatsapp, IoLogoYoutube } from "react-icons/io5";
import { FaTelegram, FaInstagram } from "react-icons/fa6";
function Contact() {
  return (
    <div className={styles.contact}>
      <div className='container'>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Адрес:</h3>
            <p className={styles.infoText}> 935902, Россия, Новороссийск,<br /> ул. Сухумское шоссе 80 </p>
            <h3 className={styles.infoTitle}>Телефон:  </h3>
            <p className={styles.infoText}>+ 7 (960) 495 18 18</p>
            <h3 className={styles.infoTitle}>E-mail: </h3>
            <p className={styles.infoText}>info@pohod23.ru </p>
            <div>
              <h3 className={styles.infoTitle}>Мы в соц.сетях:</h3>
              <div className={styles.icons}>
                <IoLogoWhatsapp size={'25px'} />
                <IoLogoYoutube size={'25px'} />
                <FaTelegram size={'25px'} />
                <FaInstagram size={'25px'} />
              </div>
            </div>
          </div>
          <img
            className={styles.map}
            src='https://static-maps.yandex.ru/1.x/?api_key=01931952-3aef-4eba-951a-8afd26933ad6&theme=light&lang=ru_RU&size=520%2C440&l=map&spn=0.008211%2C0.005852&ll=37.811546%2C44.731116&lg=0&cr=0&pt=37.811546%2C44.731116%2Cplacemark&signature=LJtHddVBTDUNDLJq70deM72Nf6scgAX9gTSEAvwdUx4='
            alt='map'
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
