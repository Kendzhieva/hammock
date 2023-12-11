import { useEffect, useState } from 'react';
import styles from './createProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createCategories, getCategories } from 'store/features/categoriesSlice';
import CreatableSelect from 'react-select/creatable';
import ModalCategories from 'components/ModalCategories';
import { createProduct, getAllProduct } from 'store/features/productsSlice';
import { useForm } from 'react-hook-form';


function CreateProduct() {

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categoriesSlice)

  const [activeCategories, setActiveCategories] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(categories);
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    dispatch(getCategories())

  }, [])

  const handleCreate = async (inputValue) => {
    await setIsLoading(true);
    await console.log(inputValue);
    await dispatch(createCategories({ name: inputValue }))
    await setActiveCategories(inputValue);
    await setOptions(categories)
    await setIsLoading(false)

    // const newOption = createOption(inputValue);
    // setIsLoading(false);

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const findCategoryId = () => {
    return categories.filter((item) => {

      return item.name === activeCategories.label
    })
  }

  const handleCreateProduct = async (data) => {
    console.log(findCategoryId()[0].id);
    const fullData = { ...data, categoryId: findCategoryId()[0].id }
    dispatch(createProduct(fullData))
  }


  return (
    <div className={styles.create_product}>
      <div className='container'>
        <h2 className={styles.title}>Создание продукта</h2>
        <div className={styles.content}>
          <form onSubmit={handleSubmit(handleCreateProduct)}>
            <div className={styles.category}>
              <CreatableSelect
                className={styles.select}
                placeholder="Выбрать котегорию"
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={(newValue) => setActiveCategories(newValue)}
                onCreateOption={handleCreate}
                options={options && options.map((item) => {
                  return { value: item.name, label: item.name }
                })}
                value={activeCategories}
              />
              <button className={styles.button} onClick={() => setIsOpenModal(true)}>редактировать категории</button>
              <ModalCategories isOpen={isOpenModal} setIsOpen={setIsOpenModal} categories={categories} />
            </div>

            <input
              className={styles.input}
              placeholder='Название'
              {...register('name')}
            />
            <input
              className={styles.input}
              placeholder='Описание'
              {...register('description')}

            />
            <input
              className={styles.input}
              placeholder='Цена'
              {...register('price')}

            />
            <button type='submit' className={styles.button}>Создать</button>
          </form>
        </div>


      </div>
    </div>
  );
}

export default CreateProduct;
