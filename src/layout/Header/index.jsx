import styles from './header.module.css';
import { ReactComponent as Logo } from 'assets/icons/main/fullLogo.svg';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authLogOut } from 'store/features/authSlise';
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";

const Header = () => {

  const { user, status, error } = useSelector(state => state.authSlice)

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
              {user ?
                <>
                  <span className={styles.handlersLink} onClick={() => {
                    dispatch(authLogOut())
                    navigate('/')
                  }}>
                    <IoLogOutOutline size='22' />
                    <p>Выход</p>
                  </span>

                  <Link to='/profile' className={styles.handlersLink}>
                    <AiOutlineUser size='22' />
                    <p>Личный кабинет</p>
                  </Link>
                </>
                :
                <Link className={styles.handlersLink} to="auth/login">
                  <IoLogInOutline size={'22px'} />
                  <p >Вход</p>
                </Link>
              }


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
