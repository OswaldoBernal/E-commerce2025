function Hero() {
  try {
    return React.createElement('section', {
      className: 'bg-beige text-neutral-dark py-20',
      'data-name': 'hero',
      'data-file': 'components/Hero.js'
    }, 
      React.createElement('div', {
        className: 'container mx-auto px-4 text-center'
      }, [
        React.createElement('h2', {
          key: 'hero-title',
          className: 'text-5xl font-light mb-6 tracking-wide text-primary'
        }, 'CAMISETAS DE FÚTBOL PREMIUM'),
        
        React.createElement('p', {
          key: 'hero-subtitle',
          className: 'text-xl mb-8 max-w-2xl mx-auto font-light text-neutral-dark opacity-80'
        }, 'Colección exclusiva de jerseys vintage y contemporáneos. Calidad excepcional, autenticidad garantizada.'),
        
        React.createElement('div', {
          key: 'hero-features',
          className: 'grid md:grid-cols-3 gap-8 mt-16'
        }, [
          React.createElement('div', {
            key: 'feature-1',
            className: 'text-center'
          }, [
            React.createElement('i', {
              key: 'icon-1',
              className: 'fas fa-certificate text-4xl text-secondary mb-4'
            }),
            React.createElement('h3', {
              key: 'title-1',
              className: 'text-xl font-medium mb-2 text-primary'
            }, 'AUTENTICIDAD'),
            React.createElement('p', {
              key: 'desc-1',
              className: 'opacity-70 font-light'
            }, 'Productos originales verificados')
          ]),
          
          React.createElement('div', {
            key: 'feature-2',
            className: 'text-center'
          }, [
            React.createElement('i', {
              key: 'icon-2',
              className: 'fas fa-truck text-4xl text-secondary mb-4'
            }),
            React.createElement('h3', {
              key: 'title-2',
              className: 'text-xl font-medium mb-2 text-primary'
            }, 'ENVÍO EXPRESS'),
            React.createElement('p', {
              key: 'desc-2',
              className: 'opacity-70 font-light'
            }, 'Entrega en 24-48 horas')
          ]),
          
          React.createElement('div', {
            key: 'feature-3',
            className: 'text-center'
          }, [
            React.createElement('i', {
              key: 'icon-3',
              className: 'fas fa-shield-check text-4xl text-secondary mb-4'
            }),
            React.createElement('h3', {
              key: 'title-3',
              className: 'text-xl font-medium mb-2 text-primary'
            }, 'GARANTÍA'),
            React.createElement('p', {
              key: 'desc-3',
              className: 'opacity-70 font-light'
            }, '30 días de devolución')
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('Hero component error:', error);
    reportError(error);
  }
}
