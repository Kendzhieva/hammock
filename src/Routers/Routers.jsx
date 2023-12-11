import MainLayout from 'layout/MainLayout';

import Blog from 'pages/Blog';
import Card from 'pages/Card';
import Catalog from 'pages/Catalog';
import CreateProduct from 'pages/CreateProduct';
import Delivery from 'pages/Delivery';
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import Post from 'pages/Post';
import ProductCard from 'pages/ProductCard';
import Profile from 'pages/Profile';
import Sales from 'pages/Sales';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { getUserInfo } from 'store/features/authSlise';

const Routers = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='catalog/:productId' element={<Detail />} />
          <Route path='sales' element={<Sales />} />
          <Route path='delivery' element={<Delivery />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:postId' element={<Post />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='card' element={<Card />} />
          <Route path='product-card' element={<ProductCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
