function Products() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [searchTerm, setSearchTerm] = React.useState('');

    const filteredProducts = mockProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.team.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const getThemeClass = () => {
      if (selectedCategory === 'vintage') return 'vintage-theme';
      if (selectedCategory === 'modern') return 'modern-theme';
      return '';
    };

    const getPageTitle = () => {
      if (selectedCategory === 'vintage') return 'COLECCIÓN VINTAGE';
      if (selectedCategory === 'modern') return 'COLECCIÓN OFICIAL';
      return 'NUESTRA COLECCIÓN';
    };

    React.useEffect(() => {
      document.body.className = getThemeClass();
      return () => {
        document.body.className = '';
      };
    }, [selectedCategory]);

    return React.createElement('div', {
      className: `py-8 min-h-screen ${getThemeClass()}`,
      'data-name': 'products-page',
      'data-file': 'pages/Products.js'
    },
      React.createElement('div', {
        className: 'container mx-auto px-4'
      }, [
        React.createElement('h1', {
          key: 'page-title',
          className: `text-4xl font-bold text-center mb-8 ${selectedCategory === 'vintage' ? 'text-vintage' : selectedCategory === 'modern' ? 'text-modern' : 'text-primary'}`
        }, getPageTitle()),
        
        React.createElement('div', {
          key: 'filters-section',
          className: 'mb-8 space-y-4'
        }, [
          React.createElement('div', {
            key: 'search-bar',
            className: 'max-w-md mx-auto'
          },
            React.createElement('input', {
              type: 'text',
              placeholder: 'Buscar por equipo o nombre...',
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: 'w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary'
            })
          ),
          
          React.createElement('div', {
            key: 'category-filters',
            className: 'flex justify-center space-x-4'
          }, categories.map(category =>
            React.createElement('button', {
              key: category.id,
              onClick: () => setSelectedCategory(category.id),
              className: `px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? selectedCategory === 'vintage' ? 'btn-vintage' 
                  : selectedCategory === 'modern' ? 'btn-modern'
                  : 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`
            }, [
              React.createElement('i', {
                key: 'category-icon',
                className: `${category.icon} mr-2`
              }),
              category.name
            ])
          ))
        ]),
        
        React.createElement('div', {
          key: 'products-grid',
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        }, filteredProducts.map(product =>
          React.createElement(ProductCard, {
            key: product.id,
            product,
            theme: selectedCategory
          })
        ))
      ])
    );
  } catch (error) {
    console.error('Products component error:', error);
    reportError(error);
  }
}
