import './Profession.scss';
import Footer from '../Footer/Footer';
import profession from '../assets/profession.png';
import collect from '../assets/collect.png';
import destruction from '../assets/destruction.png';
import depollution from '../assets/depollution.png';
import disassembly from '../assets/disassembly.png';
import dismantling from '../assets/dismantling.png';
import recycling from '../assets/recycling.png';


function Profession() {
    const processSteps = [
        {id: 1, picture: collect, title: 'Collecte', text: 'Nous collectons, par nos propres moyens, sur tous les départements au nord de Paris, des véhicules hors d’usage, accidentés, en panne, en mauvais état.'},
        {id: 2, picture: destruction, title: 'Destruction administrative', text: 'Nous assurons la destruction administrative des cartes grises, et la traçabilité de chaque véhicule.'},
        {id: 3, picture: depollution, title: 'Dépollution', text: 'Nous dépolluons chaque véhicule: nous retirons les huiles, le liquide de refroidissement, le liquide de lave-glace, gaz de climatisations, carburants, cuve de GPL, pneumatiques'},
        {id: 4, picture: disassembly, title: 'Démontage', text: 'Retrait des organes en bon état en fonction de nos besoins et de notre stock (moteurs, boîtes de vitesse, lève vitre, etc.). Ces pièces sont ensuite étiquetées et rangées en magasin.'},
        {id: 5, picture: dismantling, title: 'Démantellement', text: 'Nous démantelons le reste de la carcasse avec une pelle hydraulique équipée d’une pince, et extrayons les faisceaux électriques, pièces en aluminium, et pièces non démontées précédemment.'},
        {id: 6, picture: recycling, title: 'Recyclage', text: 'Nous confions nos carcasses à un broyeur agréé, qui peaufine le recyclage des matières avant de les confier aux diverses industries, pour recycler 95% du poids du véhicule, selon la norme EU.'},
    ];

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
                <div className='profession__process__content'>
                    {processSteps.map(step => (
                        <div className={`profession__process__content__card ${(step.id === 2 || step.id === 4 || step.id === 6) && 'profession__process__content__card__right'}`}>
                            <img src={step.picture} alt="Photo d'enlèvement d'épaves"/>
                            <div>
                                <h5>Étape {step.id}</h5>
                                <h4>{step.title}</h4>
                                <p>{step.text}</p>
                            </div>
                            <div className='profession__process__content__card__circle'/>
                        </div>
                    ))}
                    <div className='profession__process__content__line'></div>
                </div>
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