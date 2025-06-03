function CartItem({ item }) {
  try {
    const { updateQuantity, removeFromCart } = useCart();

    return React.createElement('div', {
      className: 'flex items-center space-x-4 py-4 border-b border-gray-200',
      'data-name': 'cart-item',
      'data-file': 'components/CartItem.js'
    }, [
      React.createElement('img', {
        key: 'item-image',
        src: item.image,
        alt: item.name,
        className: 'w-16 h-16 object-cover rounded-md'
      }),
      
      React.createElement('div', {
        key: 'item-details',
        className: 'flex-1'
      }, [
        React.createElement('h4', {
          key: 'item-name',
          className: 'font-medium text-gray-900'
        }, item.name),
        React.createElement('p', {
          key: 'item-info',
          className: 'text-sm text-gray-500'
        }, `Talla: ${item.size} | €${item.price}`)
      ]),
      
      React.createElement('div', {
        key: 'quantity-controls',
        className: 'flex items-center space-x-2'
      }, [
        React.createElement('button', {
          key: 'decrease-btn',
          onClick: () => updateQuantity(item.id, item.size, item.quantity - 1),
          className: 'w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors'
        }, '-'),
        React.createElement('span', {
          key: 'quantity',
          className: 'w-8 text-center font-medium'
        }, item.quantity),
        React.createElement('button', {
          key: 'increase-btn',
          onClick: () => updateQuantity(item.id, item.size, item.quantity + 1),
          className: 'w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors'
        }, '+')
      ]),
      
      React.createElement('button', {
        key: 'remove-btn',
        onClick: () => removeFromCart(item.id, item.size),
        className: 'text-red-500 hover:text-red-700 transition-colors'
      }, React.createElement('i', { className: 'fas fa-trash' }))
    ]);
  } catch (error) {
    console.error('CartItem component error:', error);
    reportError(error);
  }
}
