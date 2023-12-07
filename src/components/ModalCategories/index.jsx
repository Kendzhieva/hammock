import Modal from 'components/Modal';
import styles from './modalCategories.module.css';
import { useDispatch } from 'react-redux';
import { deleteCategory, editCategories } from 'store/features/categoriesSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';

//icon
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";


function ModalCategories({ isOpen, setIsOpen, categories }) {
  const dispatch = useDispatch()

  const [editableCategory, setEditableCategory] = useState(null)
  const [editableCategoryValue, setEditableCategoryValue] = useState('')

  const handleRemoveCategory = async (id) => {
    await dispatch(deleteCategory(id))
      .unwrap()
      .then(() => {
        setEditableCategory(null)
        setEditableCategoryValue('')
      })
      .catch((error) => toast.error(error.message))
  }


  const handleEditCategory = async () => {
    await dispatch(editCategories({ id: editableCategory, name: editableCategoryValue }))
      .unwrap()
      .catch((error) => toast.error(error.message))

    setEditableCategory(null)
    setEditableCategoryValue('')
  }

  const setEdit = (id, name) => {
    setEditableCategory(id)
    setEditableCategoryValue(name)
  }





  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h2 className={styles.title}>Категории</h2>
      <table className={styles.content}>
        <thead className={styles.header}>
          <tr className={styles.list}>
            <th className={styles.item}>ID</th>
            <th className={styles.item}>Название</th>
            <th className={styles.item}></th>
            <th className={styles.item}></th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {categories && categories.map((category) => {
            return (
              <tr >
                <td className={styles.item}>{category.id}</td>
                {editableCategory === category.id ?
                  <>
                    <td className={styles.item}><input onChange={(e) => setEditableCategoryValue(e.target.value)} defaultValue={editableCategoryValue} /></td>
                    <td className={styles.item}><FaRegCircleCheck onClick={handleEditCategory} /></td>
                  </> : <>
                    <td className={styles.item}>{category.name}</td>
                    <td className={styles.item}><MdEdit onClick={() => setEdit(category.id, category.name)} /></td>
                  </>
                }

                <td className={styles.item}><MdDelete color='#dd3b3b' onClick={() => handleRemoveCategory(category.id)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Modal>
  );
}

export default ModalCategories;
