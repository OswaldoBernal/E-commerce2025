function ProductCard({ product, theme }) {
  try {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = React.useState('M');
    const [showSuccess, setShowSuccess] = React.useState(false);

    const handleAddToCart = () => {
      addToCart(product, selectedSize);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
    };

    const handleBuyNow = () => {
      addToCart(product, selectedSize);
      alert('¡Producto añadido! Redirigiendo al checkout...');
    };

    const getCardClass = () => {
      if (theme === 'vintage') return 'card-vintage';
      if (theme === 'modern') return 'card-modern';
      return 'bg-white border border-beige-medium';
    };

    const getButtonClass = () => {
      if (theme === 'vintage') return 'btn-vintage';
      if (theme === 'modern') return 'btn-modern';
      return 'btn-accent';
    };

    const getTextClass = () => {
      if (theme === 'vintage') return 'text-vintage';
      if (theme === 'modern') return 'text-modern';
      return 'text-primary';
    };

    const getBuyNowButtonClass = () => {
      const baseClass = 'w-full bg-gray-800 text-white py-2 px-4 rounded font-medium text-sm tracking-wide hover:bg-gray-900 transition-all';
      if (theme === 'vintage') return `${baseClass} font-serif`;
      if (theme === 'modern') return `${baseClass} font-bold uppercase`;
      return baseClass;
    };

    return React.createElement('div', {
      className: `${getCardClass()} rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg`,
      'data-name': 'product-card',
      'data-file': 'components/ProductCard.js'
    }, [
      React.createElement('div', {
        key: 'image-container',
        className: 'relative overflow-hidden'
      }, [
        React.createElement('img', {
          key: 'product-image',
          src: product.image,
          alt: product.name,
          className: 'w-full h-64 object-cover transition-transform duration-300 hover:scale-105'
        }),
        React.createElement('div', {
          key: 'category-badge',
          className: `absolute top-4 left-4 ${theme === 'vintage' ? 'bg-vintage-primary' : theme === 'modern' ? 'bg-modern-primary' : 'bg-primary'} text-white px-3 py-1 text-xs font-medium tracking-wide rounded`
        }, product.category === 'vintage' ? 'VINTAGE' : 'MODERNA')
      ]),
      
      React.createElement('div', {
        key: 'card-content',
        className: 'p-6'
      }, [
        React.createElement('h3', {
          key: 'product-name',
          className: `text-lg font-medium ${getTextClass()} mb-2 tracking-wide`
        }, product.name.toUpperCase()),
        
        React.createElement('p', {
          key: 'product-description',
          className: 'text-gray-600 mb-4 text-sm font-light'
        }, product.description),
        
        React.createElement('div', {
          key: 'price-section',
          className: 'flex items-center justify-between mb-4'
        }, [
          React.createElement('span', {
            key: 'price',
            className: `text-2xl font-light ${theme === 'vintage' ? 'text-vintage-secondary' : theme === 'modern' ? 'text-modern-secondary' : 'text-secondary'}`
          }, `$${(product.price * 18).toFixed(0)} MXN`),
          React.createElement('span', {
            key: 'team',
            className: 'text-sm text-gray-500 font-light'
          }, product.team)
        ]),
        
        React.createElement('div', {
          key: 'size-selector',
          className: 'mb-4'
        }, [
          React.createElement('label', {
            key: 'size-label',
            className: 'block text-xs font-medium text-gray-700 mb-1'
          }, 'TALLA:'),
          React.createElement('select', {
            key: 'size-select',
            value: selectedSize,
            onChange: (e) => setSelectedSize(e.target.value),
            className: 'w-24 p-1 text-sm border border-beige-medium rounded focus:ring-1 focus:ring-secondary focus:border-secondary'
          }, product.size.map(size =>
            React.createElement('option', {
              key: size,
              value: size
            }, size)
          ))
        ]),
        
        React.createElement('div', {
          key: 'button-section',
          className: 'space-y-2'
        }, [
          React.createElement('button', {
            key: 'add-to-cart-btn',
            onClick: handleAddToCart,
            className: `w-full ${getButtonClass()} text-white py-2 px-4 rounded font-medium text-sm tracking-wide hover:bg-opacity-90 transition-all`
          }, showSuccess ? 'AÑADIDO' : 'AÑADIR AL CARRITO'),
          React.createElement('button', {
            key: 'buy-now-btn',
            onClick: handleBuyNow,
            className: getBuyNowButtonClass()
          }, 'COMPRAR AHORA')
        ])
      ])
    ]);
  } catch (error) {
    console.error('ProductCard component error:', error);
    reportError(error);
  }
}
