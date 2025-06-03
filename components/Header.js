function Header({ currentPage, setCurrentPage }) {
  try {
    const { getTotalItems, isCartOpen, setIsCartOpen } = useCart();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const textColorClass = isScrolled ? 'text-white' : 'text-beige-light';
    const iconColorClass = isScrolled ? 'text-white' : 'text-beige-light';

    return React.createElement('header', {
      className: `${isScrolled ? 'bg-gray-800' : 'bg-primary'} shadow-lg sticky top-0 z-50 transition-all duration-300`,
      'data-name': 'header',
      'data-file': 'components/Header.js'
    }, [
      React.createElement('div', {
        key: 'container',
        className: 'container mx-auto px-4 py-4'
      }, [
        React.createElement('div', {
          key: 'nav-wrapper',
          className: 'flex items-center justify-between'
        }, [
          React.createElement('div', {
            key: 'logo',
            className: 'flex items-center space-x-2 cursor-pointer',
            onClick: () => setCurrentPage('home')
          }, [
            React.createElement('i', {
              key: 'logo-icon',
              className: `fas fa-shield-alt text-2xl ${isScrolled ? 'text-gray-400' : 'text-accent'}`
            }),
            React.createElement('h1', {
              key: 'logo-text',
              className: `text-2xl font-bold tracking-wide ${textColorClass}`
            }, 'JERSEY ELITE')
          ]),
          
          React.createElement('nav', {
            key: 'nav',
            className: 'flex items-center justify-center space-x-8'
          }, [
            React.createElement('button', {
              key: 'nav-home',
              className: `hover:opacity-80 transition-colors font-medium ${textColorClass} ${currentPage === 'home' ? 'opacity-80' : ''}`,
              onClick: () => setCurrentPage('home')
            }, 'INICIO'),
            React.createElement('button', {
              key: 'nav-vintage',
              className: `hover:opacity-80 transition-colors font-medium ${textColorClass} ${currentPage === 'vintage' ? 'opacity-80' : ''}`,
              onClick: () => setCurrentPage('vintage')
            }, 'VINTAGE'),
            React.createElement('button', {
              key: 'nav-official',
              className: `hover:opacity-80 transition-colors font-medium ${textColorClass} ${currentPage === 'official' ? 'opacity-80' : ''}`,
              onClick: () => setCurrentPage('official')
            }, 'OFICIAL')
          ]),

          React.createElement('div', {
            key: 'right-section',
            className: 'flex items-center space-x-4'
          }, [
            React.createElement('input', {
              key: 'search-input',
              type: 'text',
              placeholder: 'Buscar...',
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: 'px-3 py-1 text-sm rounded-md bg-white text-black placeholder-gray-500 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent'
            }),
            React.createElement('button', {
              key: 'cart-btn',
              className: 'relative p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors',
              onClick: () => setIsCartOpen(!isCartOpen)
            }, [
              React.createElement('i', {
                key: 'cart-icon',
                className: `fas fa-shopping-bag text-xl ${iconColorClass}`
              }),
              getTotalItems() > 0 && React.createElement('span', {
                key: 'cart-badge',
                className: 'absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'
              }, getTotalItems())
            ])
          ])
        ])
      ])
    ]);
  } catch (error) {
    console.error('Header component error:', error);
    reportError(error);
  }
}
