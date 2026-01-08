import React from 'react';
import { AppProvider } from './contexts/AppContext.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { CartProvider } from './contexts/CartContext.js';

// Componentes
import Navbar from './components/Navbar.js';
import Catalog from './components/Catalog.js';
import Designer from './components/Designer.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <Navbar />
            <main className="main-content">
              <section id="home" className="hero">
                <div className="container">
                  <h1>YOLIMAR</h1>
                  <p>Textiles de calidad con diseño personalizado</p>
                  <div className="hero-actions">
                    <a href="#catalog" className="btn btn-primary">Ver Catálogo</a>
                    <a href="#designer" className="btn btn-secondary">Diseñar Ahora</a>
                  </div>
                </div>
              </section>
              
              <section id="catalog" className="catalog-section">
                <div className="container">
                  <h2>Catálogo de Productos</h2>
                  <Catalog />
                </div>
              </section>
              
              <section id="designer" className="designer-section">
                <div className="container">
                  <h2>Diseña tu Prenda</h2>
                  <Designer />
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;