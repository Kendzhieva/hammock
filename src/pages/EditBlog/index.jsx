import styles from './editBlog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

//icons
import { MdEdit } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { editBlog, getOneBlog } from 'store/features/blogsSlice';



function EditBlog() {
  const { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneBlog(id))
  }, [id])

  const { blog } = useSelector(state => state.blogsSlice)


  const handleEditBlog = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const content = e.target.content.value

    const data = { title, content }

    dispatch(editBlog({ data, id }))
      .unwrap()
      .then(() => toast.success('блога данные изменены'))
      .catch((error) => toast.error(error.message[0]))
  }

  return (
    <div className='container'>
      <div className={styles.content}>
        <div className={styles.top}>
          <label className={styles.avatar}>
            <input type='file' accept='img/*' />
            <img
              src={blog.images}
              alt=''
            />
          </label>
        </div>
        <form className={styles.bottom} onSubmit={handleEditBlog}>
          <p className={styles.name}>{blog.title}</p>

          <p className={styles.info}>
            <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Название:</p>
            <input
              className={styles.input}
              defaultValue={blog.title}
              placeholder='Название'
              name='title'
            />
            <MdEdit size={'50px'} />
          </p>

          <p className={styles.infoTextarea}>
            <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Контент:</p>
            <textarea
              rows={7}
              className={styles.input}
              placeholder='Контент'
              name='content'
              defaultValue={blog.content}
            />
            <MdEdit size={'50px'} />
          </p>

          <button className={styles.button} type='submit'>сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default EditBlog;
