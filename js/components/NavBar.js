import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="imagenes/Logos/Yolimar_LB.png" alt="Yolimar" />
        <span>YOLIMAR</span>
      </div>
      <div className="navbar-links">
        <a href="#home">Inicio</a>
        <a href="#catalog">Catálogo</a>
        <a href="#designer">Diseñar</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;