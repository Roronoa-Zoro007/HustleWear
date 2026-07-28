import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // ADD TO CART
  const addToCart = (product) => {
    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + product.quantity,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        product
      ]);
    }

    setCartOpen(true);
  };

  // REMOVE
  const removeFromCart = (id) => {
    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  };

  // INCREASE
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // WISHLIST
  const addToWishlist = (product) => {
    const exist = wishlist.find(
      (item) => item.id === product.id
    );

    if (!exist) {
      setWishlist([
        ...wishlist,
        product
      ]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,

        wishlist,
        addToWishlist,
        removeFromWishlist,

        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;