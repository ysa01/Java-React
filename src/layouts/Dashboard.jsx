import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CartDetail from '../pages/CartDetail';
import ProductDetail from '../pages/ProductDetail';
import ProductList from '../pages/ProductList';

import Categories from './Categories';
import Navi from './Navi';

export default function Dashboard() {
  return (
    <div>
      <Navi />
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-3">
            <Categories />
          </div>
          <div class="col-md-9">
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
