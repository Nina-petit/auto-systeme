import React, { useState } from 'react';
import './CarSell.scss';
import Footer from '../Footer/Footer';

function CarSell() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [registration, setRegistration] = useState('');
    const [firstCirculationDate, setFirstCirculationDate] = useState('');
    const [kilometers, setKilometers] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `Nom et Prénom: ${name}\nEmail: ${mail}\nTéléphone: ${phone}\nType de véhicule: ${vehicleType}\nImmatriculation: ${registration}\nDate de première mise en circulation: ${firstCirculationDate}\nKilomètres au compteur: ${kilometers}\nDescription du véhicule et de son état: ${description}`;
        window.location.href = `mailto:test@gmail.com?subject=Demande de reprise de véhicule&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="car-sell">
            <div className="car-sell__content">
                <div className="form">
                    <h3>Confiez-nous votre véhicule</h3>
                    <h4>Vous avez un véhicule à vendre, nous procédons à son enlèvement ou vous accueillons pour la livraison dans nos locaux (sauf le samedi). Après avoir pris connaissance de l’état de votre véhicule, nous vous ferons parvenir notre meilleure offre, puis nous nous chargerons de le recycler dans les règles ou de le confier à notre réseau de réparateurs en France ou à l'export pour le remettre en circulation.</h4>
                    <div className='form-content'>
                        <form onSubmit={handleSubmit}>
                            <div className='form__inputs'>
                                <label>
                                    Nom et Prénom
                                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nom et Prénom'/>
                                </label>
                                <label>
                                    Email *
                                    <input type="text" value={mail} onChange={e => setMail(e.target.value)} placeholder='Email'/>
                                </label>
                                <label>
                                    Téléphone *
                                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Téléphone'/>
                                </label>
                                <label>
                                    Type de véhicule
                                    <input type="text" value={vehicleType} onChange={e => setVehicleType(e.target.value)} placeholder='Type de véhicule'/>
                                </label>
                                <label>
                                    Immatriculation *
                                    <input type="text" value={registration} onChange={e => setRegistration(e.target.value)} placeholder='AB-123-CD'/>
                                </label>
                                <label>
                                    Date de première mise en circulation
                                    <input type="text" value={firstCirculationDate} onChange={e => setFirstCirculationDate(e.target.value)} placeholder='Date de première mise en circulation'/>
                                </label>
                            </div>
                            <label>
                                Kilomètres au compteur
                                <textarea type="text" value={kilometers} onChange={e => setKilometers(e.target.value)} placeholder='Kilomètres au compteur'/>
                            </label>
                            <label>
                                Description du véhicule et de son état
                                <textarea type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Description'/>
                            </label>
                            <input type="submit" value="Envoyer la demande" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default CarSell;