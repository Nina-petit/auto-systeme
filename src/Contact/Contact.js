import React from 'react';
import './Contact.scss';
import Footer from '../Footer/Footer';
import { ReactComponent as Cash } from '../assets/cash.svg';
import { ReactComponent as CreditCard } from '../assets/credit-card.svg';
import { ReactComponent as Route } from '../assets/route.svg';
import shop from '../assets/shop.png';
import administration from '../assets/administration.png';

function Contact() {

    return (
        <div className="contact">
            <div className='contact__content'>
                <div id='card1' className='card'>
                    <h4>Téléphone</h4>
                    <p style={{marginBottom: '20px'}}>03 21 20 66 00</p>
                    <h4>E-mail administratif</h4>
                    <p style={{marginBottom: '20px'}}>autosysteme62@autosysteme.fr</p>
                    <h4>E-mail Contact demande de pièces</h4>
                    <p style={{marginBottom: '20px'}}>piece@autosysteme.fr</p>
                    <h4>E-mail Services expédition</h4>
                    <p>expedition@autosysteme.fr</p>
                </div>
                <div id='card2' className='card card__shop'>
                    <img src={shop} alt="Photo du magasin"/>
                    <h4>Magasin</h4>
                    <p>Rue Edouard Branly</p>
                    <p>62420 Billy-Montigny</p>
                    <div className="card__button">
                        <p>Itinéraire</p>
                        <Route fill='#FFF'/>
                    </div>
                </div>
                <div id='card3' className='card card__administration'>
                    <img src={administration} alt="Photo de l'accueil administratif"/>
                    <h4>Siège social et site de production</h4>
                    <p>AUTO SYSTEME SARL</p>
                    <p>Rue Johannes Gutenberg</p>
                    <p>62420 Billy-Montigny</p>
                </div>
                <div id='card4' className='card card__payment'>
                    <h4>Nous acceptons</h4>
                    <p>les paiements</p>
                        <p className='card__payment__line'><Cash/> En espèce jusque 1000€</p>
                        <p className='card__payment__line'><CreditCard/> En CB au comptant, ou paiement en 3/4 fois (renseignez-vous auprès de nos vendeurs)</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Contact;