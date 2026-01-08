import React from 'react';
import { AppProvider } from './contexts/AppContext.js';
import { AuthProvider } from './contexts/AuthContext.js';
import { CartProvider } from './contexts/CartContext.js';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <header className="navbar">
              <div className="navbar-logo">
                <img src="imagenes/Logos/Yolimar_LB.png" alt="Yolimar" />
                <span>YOLIMAR</span>
              </div>
              <nav className="navbar-links">
                <a href="#catalog">Catálogo</a>
                <a href="#designer">Diseñar</a>
                <a href="#contact">Contacto</a>
              </nav>
            </header>
            
            <main className="container">
              <h1>Bienvenido a Yolimar</h1>
              <p>Textiles de calidad con diseño personalizado</p>
              {/* Aquí irían los componentes del catálogo */}
            </main>
            
            <footer className="footer">
              <div className="footer-content">
                <div className="footer-section">
                  <h3>Contacto</h3>
                  <p>📍 Feria Barrio Lindo Pasillo Potosi Puesto NRO. 1038</p>
                  <p>📞 WhatsApp: +591 76319999</p>
                </div>
              </div>
            </footer>
          </div>
        </CartProvider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;