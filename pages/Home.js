function Home({ setCurrentPage }) {
  try {
    const featuredProducts = mockProducts.slice(0, 3);

    return React.createElement('div', {
      'data-name': 'home-page',
      'data-file': 'pages/Home.js'
    }, [
      React.createElement(Hero, { key: 'hero' }),
      
      React.createElement('section', {
        key: 'featured-section',
        className: 'py-16 bg-white'
      }, 
        React.createElement('div', {
          className: 'container mx-auto px-4'
        }, [
          React.createElement('h2', {
            key: 'section-title',
            className: 'text-3xl font-bold text-center text-primary mb-12'
          }, 'Productos Destacados'),
          
          React.createElement('div', {
            key: 'products-grid',
            className: 'grid md:grid-cols-3 gap-8'
          }, featuredProducts.map(product =>
            React.createElement(ProductCard, {
              key: product.id,
              product
            })
          )),
          
          React.createElement('div', {
            key: 'cta-section',
            className: 'text-center mt-12'
          },
            React.createElement('button', {
              onClick: () => setCurrentPage('products'),
              className: 'btn-primary text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 transition-all'
            }, 'Ver Todos los Productos')
          )
        ])
      )
    ]);
  } catch (error) {
    console.error('Home component error:', error);
    reportError(error);
  }
}
