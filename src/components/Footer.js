import React from 'react';

const Footer = () => {
    return (
        <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Horarios
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Mensajes
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Contactenos
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2023 🌴  La CostaRecords 🌴 , Inc</p>
      </footer>
    );
}

export default Footer;
