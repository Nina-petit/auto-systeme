import React, { useState } from 'react';
import './Header.scss';
import logo from '../assets/logo-auto-systeme-min.jpg';
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <div className={`header ${location.pathname === "/" && "header__light"}`}>
      <Link
        to="/"
        onClick={handleLinkClick}
        title="Aller à la page d'accueil"
      >
        <img src={logo} alt="Logo" className="header__logo"/>
      </Link>
      <button
        className={`header__burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir ou fermer le menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header__navbar ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link className={location.pathname === "/" && "current-page"} to="/" onClick={handleLinkClick} title="Aller à la page d'accueil">Accueil</Link></li>
          <li><Link className={location.pathname === "/part-search" && "current-page"} to="/part-search" onClick={handleLinkClick} title="Aller à la page Recherche de pièces">Recherche de pièces</Link></li>
          <li><Link className={location.pathname === "/car-sell" && "current-page"} to="/car-sell" onClick={handleLinkClick} title="Aller à la page Vendez votre véhicule">Vendez votre véhicule</Link></li>
          <li><Link className={location.pathname === "/profession" && "current-page"} to="/profession" onClick={handleLinkClick} title="Aller à la page Notre métier">Notre métier</Link></li>
          {/* <li><Link className={location.pathname === "/car-buy" && "current-page"} to="/car-buy" title="Aller à la page d'accueil">Nos véhicules à vendre</Link></li> */}
          <li><Link to="/contact" onClick={handleLinkClick} title="Aller à la page de contact" className={`header__navbar__contact ${location.pathname !== "/" && "header__navbar__contact__dark"} ${location.pathname === "/contact" && "current-page"}`}>
            <div><span>Nous contacter</span></div>
          </Link></li>
        </ul>
      </nav>
    </div>
  )
};

export default Header;