import Blog from 'pages/Blog';
import Catalog from 'pages/Catalog';
import Delivery from 'pages/Delivery';
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import Post from 'pages/Post';
import Sales from 'pages/Sales';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Catalog />} path='/catalog' />
        <Route element={<Detail />} path='/catalog/:productId' />
        <Route element={<Sales />} path='/sales' />
        <Route element={<Delivery />} path='/delivery' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<Post />} path='/blog/:postId' />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
