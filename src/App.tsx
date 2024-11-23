import React from 'react';
import './App.css';
import { products } from './mockdata/products';
import ProductList from './components/ProductList';

const mockdata = products;

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>Varer</h1>
      <ProductList data={mockdata}/>
    </div>
  );
}

export default App;
