import './Footer.scss';
import { useLocation } from "react-router-dom";
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
            <img src={logo} alt="Logo" className="footer__address__logo"/>
            <h4>Auto Systeme</h4>
            <p>Rue Edouard Branly - 62420 Billy Montigny</p>
            <div className="footer__address__route">
                <p>Itinéraire</p>
                <Route fill='#137044'/>
            </div>
            </div>
            <div className="footer__info">
            <div className="footer__info__contact">
                <h4>Contact</h4>
                <div className="footer__info__contact__phone">
                <Phone fill='#1F2B25'/>
                <p>03 21 20 66 00</p>
                </div>
                <div>
                <Mail fill='#1F2B25'/>
                <p>autosysteme62@autosysteme.fr</p>
                </div>
            </div>
            <h4>Horaires d'ouverture</h4>
            <div className="footer__info__schedule">
                <p><p style={{fontWeight: 700}}>Lundi:</p> 14h-18h</p>
                <p><p style={{fontWeight: 700}}>Du mardi au vendredi:</p> 9h-12h30 / 14h-18h</p>
                <p><p style={{fontWeight: 700}}>Samedi:</p> 9h-13h</p>
            </div>
            </div>
            <div className="footer__indra">
            <h4>Membre du réseau</h4>
            <img src={logo_indra} alt="Logo Indra" className="footer__indra__logo"/>
            </div>
        </div>
    )
};

export default Footer;