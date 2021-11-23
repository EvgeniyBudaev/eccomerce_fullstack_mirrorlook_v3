import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_DOMAIN}api/v1/products/?catalog_slug=mirrors`);
    console.log("response", response);
    return response.data;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.entities);
      } catch (e) {
        console.log(e);
      }
    };
    void fetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <div className="Box"></div>
      <div>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App;
