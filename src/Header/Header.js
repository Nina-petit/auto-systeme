import React from 'react';
import './Header.scss';
import logo from '../assets/logo-auto-systeme-min.jpg';
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

    return (
      <div className={`header ${location.pathname === "/" && "header__light"}`}>
        <Link style={{cursor: 'pointer'}} to="/" title="Aller à la page d'accueil"><img src={logo} alt="Logo" className="header__logo"/></Link>
        <nav className="header__navbar">
          <ul>
            <li><Link className={location.pathname === "/" && "current-page"} to="/" title="Aller à la page d'accueil">Accueil</Link></li>
            <li><Link className={location.pathname === "/part-search" && "current-page"} to="/part-search" title="Aller à la page Recherche de pièces">Recherche de pièces</Link></li>
            <li><Link className={location.pathname === "/car-sell" && "current-page"} to="/car-sell" title="Aller à la page Vendez votre véhicule">Vendez votre véhicule</Link></li>
            <li><Link className={location.pathname === "/profession" && "current-page"} to="/profession" title="Aller à la page Notre métier">Notre métier</Link></li>
            {/* <li><Link className={location.pathname === "/car-buy" && "current-page"} to="/car-buy" title="Aller à la page d'accueil">Nos véhicules à vendre</Link></li> */}
            <li><Link to="/contact" title="Aller à la page de contact" className={`header__navbar__contact ${location.pathname !== "/" && "header__navbar__contact__dark"} ${location.pathname === "/contact" && "current-page"}`}>
              <div><span>Nous contacter</span></div>
            </Link></li>
          </ul>
        </nav>
      </div>
    )
};

export default Header;