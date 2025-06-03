function Vintage() {
  try {
    const vintageProducts = mockProducts.filter(product => product.category === 'vintage');

    React.useEffect(() => {
      document.body.className = 'vintage-theme';
      return () => {
        document.body.className = '';
      };
    }, []);

    return React.createElement('div', {
      className: 'py-8 min-h-screen vintage-theme',
      'data-name': 'vintage-page',
      'data-file': 'pages/Vintage.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-4'
      }, [
        React.createElement('div', {
          key: 'hero-section',
          className: 'text-center mb-12'
        }, [
          React.createElement('h1', {
            key: 'page-title',
            className: 'text-5xl font-bold text-vintage mb-4'
          }, 'COLECCIÓN VINTAGE'),
          React.createElement('p', {
            key: 'page-subtitle',
            className: 'text-xl text-vintage-secondary font-medium'
          }, 'Camisetas clásicas con historia y carácter')
        ]),
        
        React.createElement('div', {
          key: 'products-grid',
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        }, vintageProducts.map(product =>
          React.createElement(ProductCard, {
            key: product.id,
            product,
            theme: 'vintage'
          })
        ))
      ])
    );
  } catch (error) {
    console.error('Vintage component error:', error);
    reportError(error);
  }
}
