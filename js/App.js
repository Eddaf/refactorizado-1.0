import React from 'react';
import { AppProvider } from './contexts/AppContext.js';
import Catalog from './components/Catalog.js';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <header className="navbar">
          {/* Contenido del navbar */}
        </header>
        <main>
          <Catalog />
        </main>
        <footer className="footer">
          {/* Contenido del footer */}
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;