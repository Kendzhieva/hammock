import Modal from 'components/Modal';
import styles from './modalCategories.module.css';
import { CiEdit, CiTrash, CiCircleCheck } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { deleteCategory, editCategories } from 'store/features/categoriesSlice';
import { toast } from 'react-toastify';
import { useState } from 'react';


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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>редлктировать</th>
            <th>удалить</th>
          </tr>
        </thead>
        <tbody>
          {categories && categories.map((category) => {
            return (
              <tr>
                <td>{category.id}</td>
                {editableCategory === category.id ?
                  <>
                    <td><input onChange={(e) => setEditableCategoryValue(e.target.value)} defaultValue={editableCategoryValue} /></td>
                    <td><CiCircleCheck onClick={handleEditCategory} /></td>
                  </> : <>
                    <td>{category.name}</td>
                    <td><CiEdit onClick={() => setEdit(category.id, category.name)} /></td>
                  </>
                }

                <td><CiTrash onClick={() => handleRemoveCategory(category.id)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Modal>
  );
}

export default ModalCategories;