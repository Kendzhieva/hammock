import styles from './good.module.css';
import { CgClose } from "react-icons/cg";
import presentIcon from 'assets/icons/catalog/present.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteProduct } from 'store/features/productsSlice';
import { toast } from 'react-toastify';

//icon
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import notLongText from 'utils/notLongText';

function Good({ imgUrl, name, text, price, isRemove = false, isPresent = false, id, isAddCart = true }) {

  const { user } = useSelector(state => state.authSlice)

  const dispatch = useDispatch()

  const handelDelete = () => {
    dispatch(deleteProduct(id))
      .unwrap()
      .then(() => toast.success('продукт удалён'))
      .catch((error) => toast.error(error.message))
  }

  const isAdmin = user?.roles[0]?.value === 'ADMIN'


  return (
    <Link to={`/catalog/${id}`}>
      <div className={styles.good}>
        {isPresent ? <img
          src={presentIcon}
          alt=''
          className={styles.present}
        /> : null
        }
        <div className={styles.info}>
          <img
            src={imgUrl || "https://bogatyr.club/uploads/posts/2023-03/1679580679_bogatyr-club-p-stich-na-chernom-fone-vkontakte-27.jpg"}
            alt="kartinka"
            className={styles.img} />
          <h5 className={styles.name}>{notLongText(name, 20)}</h5>
          <p className={styles.text}>{notLongText(text, 20)}</p>
          <p className={styles.price}>{price} руб</p>
          {isAdmin ?
            <div className={styles.buttonsAdmin}>
              <Link to={`/edit-product/${id}`}><button className={styles.buttonAdmin}><MdEdit size={'20px'} color='#2d7033' /></button></Link>
              <button className={styles.buttonAdmin} onClick={handelDelete}><MdDelete size={'20px'} color='#2d7033' /></button>
              {isAddCart ? <button className={styles.buttonAdmin} onClick={() => dispatch(addToCart(id))}><FaCartPlus color='#2d7033' size={'20px'} /></button> : null}
            </div>
            : null}

          <div />
        </div>
        {isRemove ? <button className={styles.button_delete}><CgClose size={'15px'} /></button> : null}
      </div>
    </Link>
  )
};

export default Good;
