import './Footer.scss';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo-auto-systeme-min.jpg';
import logo_indra from '../assets/logo-indra.png';
import { ReactComponent as Route } from '../assets/route.svg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';

function Footer() {
    const location = useLocation();

    return (
        <div className={`footer ${(location.pathname !== "/" && location.pathname !== "/profession") && "footer__dark"}`}>
            <div className="footer__address">
                <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    title="Aller à la page d'accueil"
                >
                    <img src={logo} alt="Logo" className="footer__address__logo" />
                </Link>
                <h4>Auto Systeme</h4>
                <p>Rue Edouard Branly - 62420 Billy Montigny</p>
                <a
                    href="https://www.google.fr/maps/place/Auto+Système/@50.417382,2.8982402,17z/data=!4m15!1m8!3m7!1s0x47dd33c228287cad:0x47afc12826ad89dd!2sRue+Edouard+Branly,+62420+Billy-Montigny!3b1!8m2!3d50.4173786!4d2.9008151!16s%2Fg%2F1tf5phyx!3m5!1s0x47dd33c1c334ec9f:0x683ebae8a2808d62!8m2!3d50.4173242!4d2.9004775!16s%2Fg%2F1vzn4v7c?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__address__route"
                >
                    <p>Itinéraire</p>
                    <Route fill='#137044' />
                </a>
            </div>
            <div className="footer__info">
                <div className="footer__info__contact">
                    <h4>Contact</h4>
                    <div className="footer__info__contact__phone">
                        <Phone fill='#1F2B25' />
                        <a href="tel:+33321206600">03 21 20 66 00</a>
                    </div>
                    <div className="footer__info__contact__mail">
                        <Mail fill='#1F2B25' />
                        <a href="mailto:autosysteme62@autosysteme.fr">autosysteme62@autosysteme.fr</a>
                    </div>
                </div>
                <h4>Horaires d'ouverture</h4>
                <div className="footer__info__schedule">
                    <p><p style={{ fontWeight: 700 }}>Lundi au vendredi:</p> 9h-12h / 14h-18h</p>
                    <p>Fermé le samedi</p>
                </div>
            </div>
            <div className="footer__indra">
                <h4>Membre du réseau</h4>
                <a
                    href="https://www.indra.fr/fr/home"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={logo_indra}
                        alt="Logo Indra"
                        className="footer__indra__logo"
                    />
                </a>
            </div>
        </div>
    )
};

export default Footer;