import './Home.scss';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";
import hero from '../assets/hero.png';

function Home() {
    return (
        <div className="home">
            <div className="hero" style={{backgroundImage: `url(${hero})`}}>
            <div className="hero__content">
                <h1>Vous recherchez une pièce automobile?</h1>
                <h2>Forts d’un stock de plus de 60 000 pièces de réemploi, démontées étiquetées garanties, d’un stock de plus de 1000 véhicules en cours de démontage et des arrivages quotidiens, nous nous efforçons de vous trouver les pièces qui correspondent à votre demande.</h2>
                <Link to="/part-search" title="Aller à la page Recherche de pièces">Trouver une pièce</Link>
            </div>
            <div className="box"></div>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    )
};

export default Home;