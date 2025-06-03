function Official() {
  try {
    const officialProducts = mockProducts.filter(product => product.category === 'modern');

    React.useEffect(() => {
      document.body.className = 'modern-theme';
      return () => {
        document.body.className = '';
      };
    }, []);

    return React.createElement('div', {
      className: 'py-8 min-h-screen modern-theme',
      'data-name': 'official-page',
      'data-file': 'pages/Official.js'
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
            className: 'text-5xl font-bold text-modern mb-4'
          }, 'COLECCIÓN OFICIAL'),
          React.createElement('p', {
            key: 'page-subtitle',
            className: 'text-xl text-modern-secondary font-bold'
          }, 'PERFORMANCE. STYLE. AUTHENTICITY.')
        ]),
        
        React.createElement('div', {
          key: 'products-grid',
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        }, officialProducts.map(product =>
          React.createElement(ProductCard, {
            key: product.id,
            product,
            theme: 'modern'
          })
        ))
      ])
    );
  } catch (error) {
    console.error('Official component error:', error);
    reportError(error);
  }
}
