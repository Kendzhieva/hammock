import CatalogBlock from "components/Catalog/CatalogBlock";
import ProductCategoriesList from "components/ProductCategoriesList";
import styles from './catalog.module.css'
import TrendMonth from "components/TrendMonth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "store/features/categoriesSlice";
import Undefined from "components/Undefined";
import { getAllProducts } from "store/features/productsSlice";


function Catalog() {
  const { products } = useSelector(state => state.productsSlice)
  const { categories } = useSelector(state => state.categoriesSlice)
  const [activeCategory, setActiveCategory] = useState('Все')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getAllProducts())
  }, [])
  return (
    <div className={styles.catalog}>
      <div className="container">
        <h2 className={styles.title}>Каталог</h2>
        <ProductCategoriesList setActiveCategory={setActiveCategory} />
        {
          activeCategory === 'Все' ? <>
            {categories && categories.map((category) => {
              const categoryProduct = products.filter((product) => product.categoryId === category.id)
              if (categoryProduct.length === 0) {
                return null
              }
              return (
                <CatalogBlock title={category.name} products={categoryProduct} />
              )
            })}
          </> : <>
            {
              categories.filter((category) => category.name === activeCategory)
                .map((category) => {
                  const categoryProduct = products.filter((product) => product.categoryId === category.id)
                  if (categoryProduct.length === 0) {
                    return <Undefined text={'товаров нет'} />
                  }
                  return <CatalogBlock title={category.name} products={categoryProduct} />
                })
            }
          </>
        }
        <TrendMonth />
      </div>
    </div>
  )

};

export default Catalog;
