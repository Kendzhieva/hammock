import { useEffect, useState } from 'react';
import styles from './createProduct.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createCategories, getCategories } from 'store/features/categoriesSlice';
import CreatableSelect from 'react-select/creatable';
import ModalCategories from 'components/ModalCategories';


function CreateProduct() {

  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.categoriesSlice)

  const [activeCategories, setActiveCategories] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(categories);
  const [isOpenModal, setIsOpenModal] = useState(true)

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


  return (
    <div>
      <h2>Создание продукта</h2>
      <h3>Выбрать котегорию</h3>
      <CreatableSelect
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
      <button onClick={() => setIsOpenModal(true)}>редактировать категории</button>
      <ModalCategories isOpen={isOpenModal} setIsOpen={setIsOpenModal} categories={categories} />
    </div>
  );
}

export default CreateProduct;
