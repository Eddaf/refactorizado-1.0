/* Aplicación principal Yolimar */

const { useState, useEffect } = React;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Manejar navegación por hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Establecer página inicial

    // Simular carga
    setTimeout(() => setIsLoading(false), 1000);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return React.createElement('div', { className: 'container' }, 
          React.createElement('h1', null, 'Catálogo de Productos'),
          React.createElement('p', null, 'Explora nuestra colección de prendas personalizables.')
        );
      
      case 'designer':
        return React.createElement('div', { className: 'container' },
          React.createElement('h1', null, 'Diseñador Personalizado'),
          React.createElement('p', null, 'Crea tu propio diseño único.')
        );
      
      case 'cart':
        return React.createElement('div', { className: 'container' },
          React.createElement('h1', null, 'Carrito de Compras'),
          React.createElement('p', null, 'Revisa tus productos seleccionados.')
        );
      
      case 'admin':
        return React.createElement('div', { className: 'container' },
          React.createElement('h1', null, 'Panel Administrativo'),
          React.createElement('p', null, 'Gestión de pedidos y reportes.')
        );
      
      default:
        return React.createElement('div', { className: 'container' },
          React.createElement('div', { className: 'text-center mb-4' },
            React.createElement('h1', null, 'YOLIMAR - Ropa & Diseños Personalizados'),
            React.createElement('p', { className: 'lead' }, 'Textiles de calidad con diseño personalizado')
          ),
          React.createElement('div', { className: 'grid' },
            React.createElement('div', { className: 'card' },
              React.createElement('h3', null, '📦 Catálogo'),
              React.createElement('p', null, 'Explora nuestra colección de prendas personalizables.'),
              React.createElement('a', { href: '#catalog', className: 'btn' }, 'Ver Catálogo')
            ),
            React.createElement('div', { className: 'card' },
              React.createElement('h3', null, '🎨 Diseñar'),
              React.createElement('p', null, 'Crea tu propio diseño único.'),
              React.createElement('a', { href: '#designer', className: 'btn btn-secondary' }, 'Diseñar Ahora')
            ),
            React.createElement('div', { className: 'card' },
              React.createElement('h3', null, '📍 Visítanos'),
              React.createElement('p', null, 'Feria Barrio Lindo Pasillo Potosi Puesto NRO. 1038, Santa Cruz de la Sierra'),
              React.createElement('a', { href: 'https://wa.me/59176319999', className: 'btn', target: '_blank' }, 'WhatsApp: +591 76319999')
            )
          )
        );
    }
  };

  if (isLoading) {
    return React.createElement('div', { className: 'loading-container' },
      React.createElement('div', { className: 'loading-spinner' }),
      React.createElement('div', { className: 'loading-text' }, 'Cargando Yolimar...')
    );
  }

  return React.createElement('div', { className: 'app-container' },
    React.createElement('nav', { className: 'navbar' },
      React.createElement('div', { className: 'navbar-content' },
        React.createElement('h1', null, 'YOLIMAR'),
        React.createElement('nav', null,
          React.createElement('a', { href: '#catalog' }, 'Catálogo'),
          React.createElement('a', { href: '#designer' }, 'Diseñar'),
          React.createElement('a', { href: '#cart' }, 'Carrito'),
          React.createElement('a', { href: '#admin' }, 'Admin')
        )
      )
    ),
    React.createElement('main', { className: 'main-content' }, renderPage()),
    React.createElement('footer', { className: 'footer' },
      React.createElement('div', { className: 'footer-content' },
        React.createElement('h3', null, 'YOLIMAR - Ropa & Diseños Personalizados'),
        React.createElement('p', null, 'Textiles de calidad con diseño personalizado'),
        React.createElement('div', { className: 'contact-info' },
          React.createElement('div', { className: 'contact-item' },
            React.createElement('span', null, '📍 Feria Barrio Lindo Pasillo Potosi Puesto NRO. 1038, Santa Cruz de la Sierra')
          ),
          React.createElement('div', { className: 'contact-item' },
            React.createElement('span', null, '📞 WhatsApp: +591 76319999')
          )
        ),
        React.createElement('p', { style: { marginTop: '2rem', opacity: '0.8' } }, '© 2024 Yolimar. Todos los derechos reservados.')
      )
    )
  );
}

// Exportar para uso en main.js
window.YolimarApp = App;