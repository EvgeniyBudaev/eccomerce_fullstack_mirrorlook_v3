import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_DOMAIN : process.env.REACT_APP_DEV_DOMAIN;
    //const baseUrl = "http://62.84.119.86/";
    console.log("baseUrl: ", baseUrl);
    const response = await axios.get(`${baseUrl}api/v1/products/?catalog_slug=mirrors`);
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
      <h2>DEV</h2>
      <div>{process.env.REACT_APP_DEV_DOMAIN}</div>
      <hr />
      <h2>PROD</h2>
      <div>{process.env.REACT_APP_PROD_DOMAIN}</div>
    </div>
  )
}

export default App;
