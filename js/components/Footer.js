import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📍 Feria Barrio Lindo Pasillo Potosi Puesto NRO. 1038, Santa Cruz de la Sierra</p>
          <p>📞 WhatsApp: +591 76319999</p>
        </div>
        <div className="footer-section">
          <h3>Horarios</h3>
          <p>Lunes a Viernes: 09:00 - 18:00</p>
          <p>Sábados: 10:00 - 16:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YOLIMAR - Ropa & Diseños Personalizados</p>
      </div>
    </footer>
  );
};

export default Footer;