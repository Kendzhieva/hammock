import styles from './header.module.css';
import { ReactComponent as Logo } from 'assets/icons/main/fullLogo.svg';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className='container'>
          <div className={styles.topContent}>
            <h1 className={styles.topTitle}>
              Качественные и надежные гамаки на любой вес
            </h1>
            <nav className={styles.topNav}>
              <ul className={styles.topList}>
                <li className={styles.topListItem}>
                  <Link to='/'>Главная </Link>
                </li>
                <li className={styles.topListItem}>
                  <Link to='/catalog'>Каталог</Link>
                </li>
                <li className={styles.topListItem}>
                  <Link to='/sales'>Акции </Link>
                </li>
                <li className={styles.topListItem}>
                  <Link to='/delivery'>Доставка и оплата </Link>
                </li>
                <li className={styles.topListItem}>
                  <Link to='/'>Отзывы</Link>
                </li>
                <li className={styles.topListItem}>
                  <Link to='/blog'>Блог</Link>
                </li>
                <li className={styles.topListItem}>
                  <Link to='/'>Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className='container'>
          <div className={styles.bottomContent}>
            <Logo />
            <div className={styles.call}>
              <a className={styles.callTel} href='tel:+ 7 (960) 495 18 18'>
                + 7 (960) 495 18 18
              </a>
              <a className={styles.callHash} href='#call'>
                Заказать звонок
              </a>
            </div>
            <nav className={styles.handlers}>
              <Link to='/profile' className={styles.handlersLink}>
                <AiOutlineUser size='22' />
                <p>Личный кабинет</p>
              </Link>
              <Link to='/cart' className={styles.handlersLink}>
                <AiOutlineShoppingCart size='22' />
                <p>Корзина</p>
              </Link>
              <Link to='/search' className={styles.handlersLink}>
                <AiOutlineSearch size='22' />
                <p>Поиск</p>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
