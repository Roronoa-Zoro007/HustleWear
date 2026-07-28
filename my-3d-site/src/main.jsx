import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import CartProvider from './context/CartContext.jsx'
import WishlistProvider from './context/WishlistContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(


  <CartProvider>


    <WishlistProvider>


      <App />


    </WishlistProvider>


  </CartProvider>


)