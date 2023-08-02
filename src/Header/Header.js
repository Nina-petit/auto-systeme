import './Header.scss';
import logo from '../assets/logo-auto-systeme-min.jpg';
import { Link } from "react-router-dom";

function Header() {
    return (
    <div className="header">
        <img src={logo} alt="Logo" className="header__logo"/>
        <nav className="header__navbar">
          <ul>
            <li><Link to="/" title="Aller à la page d'accueil">Accueil</Link></li>
            <li><Link to="/part-search" title="Aller à la page d'accueil">Recherche de pièces</Link></li>
            <li><Link to="/" title="Aller à la page d'accueil">Vendez votre véhicule</Link></li>
            <li><Link to="/" title="Aller à la page d'accueil">Nos véhicules à vendre</Link></li>
            <li><Link to="/" title="Aller à la page d'accueil" className="header__navbar__contact">
              <div><span>Nous contacter</span></div>
            </Link></li>
          </ul>
        </nav>
      </div>
    )
};

export default Header;