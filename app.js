function App() {
  try {
    const [currentPage, setCurrentPage] = React.useState('home');

    const renderPage = () => {
      switch (currentPage) {
        case 'home':
          return React.createElement(Home, { setCurrentPage });
        case 'vintage':
          return React.createElement(Vintage);
        case 'official':
          return React.createElement(Official);
        default:
          return React.createElement(Home, { setCurrentPage });
      }
    };

    return React.createElement(CartProvider, null, [
      React.createElement(Header, {
        key: 'header',
        currentPage,
        setCurrentPage
      }),
      React.createElement('main', {
        key: 'main',
        className: 'min-h-screen'
      }, renderPage()),
      React.createElement(Cart, { key: 'cart' }),
      React.createElement('footer', {
        key: 'footer',
        className: 'gradient-bg text-white py-12'
      },
        React.createElement('div', {
          className: 'container mx-auto px-4 text-center'
        }, [
          React.createElement('div', {
            key: 'footer-content',
            className: 'grid md:grid-cols-3 gap-8 mb-8'
          }, [
            React.createElement('div', {
              key: 'footer-section-1'
            }, [
              React.createElement('h3', {
                key: 'footer-title-1',
                className: 'text-lg font-semibold mb-4'
              }, 'Jersey Elite'),
              React.createElement('p', {
                key: 'footer-desc-1',
                className: 'opacity-80'
              }, 'Tu tienda de confianza para camisetas de fútbol auténticas')
            ]),
            React.createElement('div', {
              key: 'footer-section-2'
            }, [
              React.createElement('h3', {
                key: 'footer-title-2',
                className: 'text-lg font-semibold mb-4'
              }, 'Contacto'),
              React.createElement('p', {
                key: 'footer-desc-2',
                className: 'opacity-80'
              }, 'info@jerseyelite.com')
            ]),
            React.createElement('div', {
              key: 'footer-section-3'
            }, [
              React.createElement('h3', {
                key: 'footer-title-3',
                className: 'text-lg font-semibold mb-4'
              }, 'Síguenos'),
              React.createElement('div', {
                key: 'social-icons',
                className: 'flex justify-center space-x-4'
              }, [
                React.createElement('i', {
                  key: 'facebook',
                  className: 'fab fa-facebook text-2xl hover:text-accent cursor-pointer'
                }),
                React.createElement('i', {
                  key: 'instagram',
                  className: 'fab fa-instagram text-2xl hover:text-accent cursor-pointer'
                }),
                React.createElement('i', {
                  key: 'twitter',
                  className: 'fab fa-twitter text-2xl hover:text-accent cursor-pointer'
                })
              ])
            ])
          ]),
          React.createElement('div', {
            key: 'footer-bottom',
            className: 'border-t border-white border-opacity-20 pt-8'
          },
            React.createElement('p', {
              className: 'opacity-80'
            }, '© 2024 Jersey Elite. Todos los derechos reservados.')
          )
        ])
      )
    ]);
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
