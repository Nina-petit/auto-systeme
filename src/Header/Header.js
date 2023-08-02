import './Header.scss';
import logo from '../assets/logo-auto-systeme-min.jpg';

function Header() {
    return (
    <div className="header">
        <img src={logo} alt="Logo" className="header__logo"/>
        <nav className="header__navbar">
          <ul>
            <li><a href="#" title="Aller à la page Accueil">Accueil</a></li>
            <li><a href="#" title="Aller à la page Recherche de pièces">Recherche de pièces</a></li>
            <li><a href="#" title="Aller à la page Vendez votre véhicule">Vendez votre véhicule</a></li>
            <li><a href="#" title="Aller à la page Nos véhicules à vendre">Nos véhicules à vendre</a></li>
            <li><a href="#" title="Aller à la page Nous contacter" className="header__navbar__contact">
              <div><span>Nous contacter</span></div>
            </a></li>
          </ul>
        </nav>
      </div>
    )
};

export default Header;