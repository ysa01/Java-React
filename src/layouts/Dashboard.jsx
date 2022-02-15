import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartDetail from '../pages/CartDetail';
import ProductDetail from '../pages/ProductDetail';
import ProductList from '../pages/ProductList';

import Categories from './Categories';
import Navi from './Navi';

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <Categories />
          </div>
          <div className="col-md-9">
            <ToastContainer position='bottom-right'/>
            <Routes>
              <Route exact path='/' element={<ProductList />} />
              <Route exact path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductDetail />} />
              <Route  path='/cart' element={<CartDetail />} />

            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}
