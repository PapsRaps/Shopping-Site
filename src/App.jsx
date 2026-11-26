import routes from './routes'
import { RouterProvider, createBrowserRouter } from "react-router"
const router = createBrowserRouter(routes)

import { useEffect, useState, useRef } from 'react'

import ProductsContext from './context/ProductsContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const cartButtonRef = useRef(null);

  useEffect(()=>{
    async function fetchItems() {
      try{
        const response = await fetch('https://fakestoreapi.com/products');

        if (!response.ok) {
          const error = new Error(`HTTP Error: ${response.status}`);
          error.status = response.status;
          throw error;
        }

        const data = await response.json();

        const productsWithQuantity = data.map(item => ({
          ...item,
          stock: Math.floor(Math.random() * 15) + 1
        }));

          setItems(productsWithQuantity);
      }catch(error){
        let msg = 'Unable to connect. Please check your internet connection.';
        if (error.name === 'SyntaxError') {
          msg = 'We received an unexpected response. Please try again.'
        }else if(error.status === 404){
          msg = "We couldn't find the shop information. Please try again."
        }else if(error.status === 400){
          msg = "We couldn't process your request. Please try again."
        }else if(error.status === 429){
          msg = "Too many requests. Please wait a moment and try again."
        }else if(error.status >= 500 && error.status <= 599){
          msg = "Our product service is temporarily unavailable."
        }
        setError(msg);
      }finally{
        setIsLoading(false)
      }
    }
    fetchItems();
  },[]);

  return (
    <ProductsContext.Provider value={{ items, isLoading, error, setItems, cart, setCart, cartButtonRef}}>
      <RouterProvider router={router} />
    </ProductsContext.Provider>
  )
}

export default App
