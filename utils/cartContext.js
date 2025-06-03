const CartContext = React.createContext();

function CartProvider({ children }) {
  try {
    const [cartItems, setCartItems] = React.useState([]);
    const [isCartOpen, setIsCartOpen] = React.useState(false);

    const addToCart = (product, size) => {
      const existingItem = cartItems.find(
        item => item.id === product.id && item.size === size
      );

      if (existingItem) {
        setCartItems(cartItems.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        setCartItems([...cartItems, { ...product, size, quantity: 1 }]);
      }
    };

    const removeFromCart = (productId, size) => {
      setCartItems(cartItems.filter(
        item => !(item.id === productId && item.size === size)
      ));
    };

    const updateQuantity = (productId, size, quantity) => {
      if (quantity <= 0) {
        removeFromCart(productId, size);
        return;
      }
      
      setCartItems(cartItems.map(item =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      ));
    };

    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
      return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      getTotalItems,
      isCartOpen,
      setIsCartOpen
    };

    return React.createElement(CartContext.Provider, { value }, children);
  } catch (error) {
    console.error('CartProvider error:', error);
    reportError(error);
  }
}

const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
