
import { Link } from 'react-router-dom';
import styles from './blogCard.module.css';
import notLongText from 'utils/notLongText';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from 'store/features/blogsSlice';
import { toast } from 'react-toastify';

//icon
import { MdEdit, MdDelete } from "react-icons/md";


function BlogCard({ imgUrl, title, text, id }) {

  const { user } = useSelector(state => state.authSlice)

  const dispatch = useDispatch()

  const handelDelete = () => {
    dispatch(deleteBlog(id))
      .unwrap()
      .then(() => toast.success('продукт удалён'))
      .catch((error) => toast.error(error.message))
  }

  const isAdmin = user?.roles[0]?.value === 'ADMIN'


  return (
    <div className={styles.blogCard}>

      <img
        className={styles.img}
        src={imgUrl}
        alt='kartinka'
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{notLongText(title, 25)}</h3>
        <p className={styles.text}>{notLongText(text, 50)}</p>
        <div className={styles.buttonsAdmin}>
          <Link to={`/blog/${id}`} className={styles.button}>Подробнее</Link>
          {isAdmin ?
            <div className={styles.buttonsAdmin}>
              <Link to={`/edit-blog/${id}`}><button className={styles.buttonAdmin}><MdEdit size={'20px'} color='#2d7033' /></button></Link>
              <button className={styles.buttonAdmin} onClick={handelDelete}><MdDelete size={'20px'} color='#2d7033' /></button>
            </div>
            : null}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
