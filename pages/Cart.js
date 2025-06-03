function Cart() {
  try {
    const { cartItems, getTotalPrice, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    const handleCheckout = () => {
      alert('¡Gracias por tu compra! Redirigiendo al pago...');
      setIsCartOpen(false);
    };

    return React.createElement('div', {
      className: 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4',
      onClick: () => setIsCartOpen(false),
      'data-name': 'cart-modal',
      'data-file': 'pages/Cart.js'
    },
      React.createElement('div', {
        className: 'bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden',
        onClick: (e) => e.stopPropagation()
      }, [
        React.createElement('div', {
          key: 'cart-header',
          className: 'flex items-center justify-between p-6 border-b border-gray-200'
        }, [
          React.createElement('h2', {
            key: 'cart-title',
            className: 'text-2xl font-bold text-primary'
          }, 'Carrito de Compras'),
          React.createElement('button', {
            key: 'close-btn',
            onClick: () => setIsCartOpen(false),
            className: 'text-gray-500 hover:text-gray-700 text-2xl'
          }, '×')
        ]),
        
        React.createElement('div', {
          key: 'cart-content',
          className: 'p-6 max-h-96 overflow-y-auto'
        }, cartItems.length === 0 ? [
          React.createElement('div', {
            key: 'empty-cart',
            className: 'text-center py-8'
          }, [
            React.createElement('i', {
              key: 'empty-icon',
              className: 'fas fa-shopping-cart text-4xl text-gray-300 mb-4'
            }),
            React.createElement('p', {
              key: 'empty-text',
              className: 'text-gray-500'
            }, 'Tu carrito está vacío')
          ])
        ] : cartItems.map(item =>
          React.createElement(CartItem, {
            key: `${item.id}-${item.size}`,
            item
          })
        )),
        
        cartItems.length > 0 && React.createElement('div', {
          key: 'cart-footer',
          className: 'p-6 border-t border-gray-200'
        }, [
          React.createElement('div', {
            key: 'total-section',
            className: 'flex items-center justify-between mb-4'
          }, [
            React.createElement('span', {
              key: 'total-label',
              className: 'text-xl font-semibold'
            }, 'Total:'),
            React.createElement('span', {
              key: 'total-amount',
              className: 'text-2xl font-bold text-accent'
            }, `€${getTotalPrice().toFixed(2)}`)
          ]),
          React.createElement('button', {
            key: 'checkout-btn',
            onClick: handleCheckout,
            className: 'w-full btn-accent text-white py-3 px-4 rounded-md font-medium text-lg hover:bg-opacity-90 transition-all'
          }, 'Proceder al Pago')
        ])
      ])
    );
  } catch (error) {
    console.error('Cart component error:', error);
    reportError(error);
  }
}
