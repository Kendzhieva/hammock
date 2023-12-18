import MainLayout from 'layout/MainLayout';

import Blog from 'pages/Blog';
import Card from 'pages/Card';
import Catalog from 'pages/Catalog';
import Contact from 'pages/Contact';
import CreateBlog from 'pages/CreateBlog';
import CreateProduct from 'pages/CreateProduct';
import Delivery from 'pages/Delivery';
import EditBlog from 'pages/EditBlog';
import EditProduct from 'pages/EditProduct';
import Home from 'pages/Home';
import Post from 'pages/Post';
import ProductCard from 'pages/ProductCard';
import Profile from 'pages/Profile';
import Sales from 'pages/Sales';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { getUserInfo } from 'store/features/authSlice';
import { getAllBlogs } from 'store/features/blogsSlice';
import { getCategories } from 'store/features/categoriesSlice';
import { getAllProducts } from 'store/features/productsSlice';

const Routers = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
    dispatch(getAllProducts())
    dispatch(getCategories())
    dispatch(getAllBlogs())
  }, [])


  return (


    <BrowserRouter >
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='catalog/:productId' element={<ProductCard />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='edit-product/:id' element={<EditProduct />} />
          {/* <Route path='catalog/:productId' element={<Detail />} /> */}
          <Route path='sales' element={<Sales />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='blog' element={<Blog />} />
          <Route path='create-blog' element={<CreateBlog />} />
          <Route path='edit-blog/:id' element={<EditBlog />} />
          <Route path='blog/:postId' element={<Post />} />
          <Route path='profile' element={<Profile />} />
          <Route path='cart' element={<Card />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
