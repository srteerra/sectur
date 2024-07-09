import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesitas
import './styles.css';

const NavigationMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExperienciasOpen, setIsExperienciasOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleExperienciasMenu = () => {
    setIsExperienciasOpen(!isExperienciasOpen);
  };

  return (
    <div className="navigation-menu-container">
      {/* Logo y texto */}
      <div className="menu-row">
        <div className="logo">Logo</div>
      </div>

      {/* Campo de búsqueda */}
      <div className="menu-row">
        <div className="search-input">
          <input type="text" placeholder="Buscar" />
          <FontAwesomeIcon icon={faSearch} /> {/* Utiliza FontAwesomeIcon para mostrar el ícono */}
        </div>
      </div>

      {/* Menú secundario */}
      <div className="menu-row">
        <div className="secondary-menu">
          <a href="#">Estados</a>
          <a href="#">Pueblos Mágicos</a>
          {/* Agrega más elementos del menú secundario aquí */}
        </div>
      </div>

      {/* Menú principal */}
      <div className="menu-row">
        <div className="primary-menu">
          <a href="#">Videos</a>
          <div className="experiencias-menu">
            <span onClick={toggleExperienciasMenu}>Experiencias</span>
            <FontAwesomeIcon icon={faAngleDown} />
            {isExperienciasOpen && (
              <ul className="experiencias-submenu">
                <li><a href="#">Boda</a></li>
                <li><a href="#">Gastronomía</a></li>
                <li><a href="#">Sol y playa</a></li>
              </ul>
            )}
          </div>
          {/* Agrega más elementos del menú principal aquí */}
        </div>
      </div>

      {/* Icono de menú hamburguesa para dispositivos móviles */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} /> {/* Utiliza FontAwesomeIcon para mostrar el ícono */}
      </div>

      {/* Contenedor del menú adaptado para dispositivos móviles */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-menu-close" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={faTimes} /> {/* Utiliza FontAwesomeIcon para mostrar el ícono */}
            </div>
            {/* Coloca aquí los elementos del menú para dispositivos móviles */}
            <ul className="mobile-menu-list">
              <li><a href="#">Elemento 1</a></li>
              <li><a href="#">Elemento 2</a></li>
              <li><a href="#">Elemento 3</a></li>
              {/* Agrega más elementos aquí si es necesario */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
