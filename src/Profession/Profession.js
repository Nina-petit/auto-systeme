import './Profession.scss';
import Footer from '../Footer/Footer';
import profession from '../assets/profession.png';

function Profession() {
    return (
        <div className="profession">
            <div className="profession__explanation">
                <h3>Notre métier</h3>
                <p>Créé en 1994 par son dirigeant actuel, Olivier PETIT, AUTO SYSTEME est devenu aujourd’hui une véritable industrie. Plus de 20 collaborateurs traitent environ 3000 véhicules hors d’usage par an. La motivation première depuis son ouverture est le respect de l’environnement et l’économie des ressources de matières premières et d’énergie en proposant en circuit court des pièces détachées de réemploi, qui sont beaucoup moins énergivores à produire que des pièces neuves. Pièces neuves qui ont fait le tour de la planète et qui sont souvent de mauvaise qualité. L’entreprise produit également des matières premières recyclables, qui repartent dans le circuit de production de biens neufs.</p>
                <div><img src={profession} alt="Photo de la casse"/></div>
            </div>
            <div className='profession__produced'>
                <h3>En 2022, nous avons produit:</h3>
            </div>
            <div className='profession__process'>
                <h3>Notre processus:</h3>
            </div>
            <div className='profession__cta'>
                <h3>Confiez-nous votre véhicule</h3>
                <h4>Vous aurez l’assurance qu’il sera bien recyclé</h4>
                <button>Je vends mon véhicule</button>
            </div>
            <Footer/>
        </div>
    )
};

export default Profession;