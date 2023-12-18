import styles from './editProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

//icons
import { MdEdit } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { editProduct, getOneProduct } from 'store/features/productsSlice';
import { useParams } from 'react-router-dom';

function EditProduct() {

  const { id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [id])

  const { product } = useSelector(state => state.productsSlice)

  console.log(product);

  const handleEditUser = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const description = e.target.description.value
    const price = +e.target.price.value

    const data = { name, description, price }

    dispatch(editProduct({ data, id }))
      .unwrap()
      .then(() => toast.success('продукта данные изменены'))
      .catch((error) => toast.error(error.message[0]))
  }


  return (
    <div className='container'>
      <div className={styles.content}>
        <div className={styles.top}>
          <label className={styles.avatar}>
            <input type='file' accept='img/*' />
            <img
              src={product.images}
              alt=''
            />
          </label>
        </div>
        <form className={styles.bottom} onSubmit={handleEditUser}>
          <p className={styles.name}>{product.name}</p>

          <p className={styles.info}>
            <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Название:</p>
            <input
              className={styles.input}
              defaultValue={product.name}
              placeholder='Название'
              name='name'
            />
            <MdEdit size={'50px'} />
          </p>

          <p className={styles.info}>
            <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Описание:</p>
            <input
              className={styles.input}
              placeholder='описание'
              name='description'
              defaultValue={product.description}
            />
            <MdEdit size={'50px'} />
          </p>

          <p className={styles.info}>
            <p className={styles.text}><FaRegCircleCheck color='#36873E' size='19px' />Цена:</p>
            <input
              className={styles.input}
              placeholder='0000'
              name='price'
              defaultValue={product.price}
            />
            <MdEdit size={'50px'} />
          </p>

          <button className={styles.button} type='submit'>сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
