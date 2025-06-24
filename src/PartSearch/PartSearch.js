import React, { useState } from 'react';
import './PartSearch.scss';
import Footer from '../Footer/Footer';
import { ReactComponent as Phone } from '../assets/phone.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';
import { ReactComponent as Cash } from '../assets/cash.svg';
import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as CreditCard } from '../assets/credit-card.svg';

function PartSearch() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [designation, setDesignation] = useState('');
    const [registration, setRegistration] = useState('');
    const [parts, setParts] = useState('');
    const [details, setDetails] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = `Nom et Prénom: ${name}\nEmail: ${mail}\nTéléphone: ${phone}\nEntreprise: ${company}\nDésignation courante du véhicule: ${designation}\nImmatriculation: ${registration}\nPièce(s) recherchée(s): ${parts}\nPrécisions: ${details}`;
        try {
            const res = await fetch('/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject: 'Demande de recherche de pièce', text }),
            });
            if (res.ok) {
                setStatus('Votre demande a bien été envoyée.');
            } else {
                setStatus("Erreur lors de l'envoi de votre demande.");
            }
        } catch (err) {
            setStatus("Erreur lors de l'envoi de votre demande.");
        }
    };

    return (
        <div className="part-search">
            <div className="form">
                <h3>Vous recherchez une pièce automobile?</h3>
                <h4>Envoyez-nous une demande:</h4>
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
                                Entreprise
                                <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder='Entreprise'/>
                            </label>
                            <label>
                                Désignation courante du véhicule
                                <input type="text" value={designation} onChange={e => setDesignation(e.target.value)} placeholder='Exemple: Clio, XM...'/>
                            </label>
                            <label>
                                Immatriculation *
                                <input type="text" value={registration} onChange={e => setRegistration(e.target.value)} placeholder='AB-123-CD'/>
                            </label>
                        </div>
                        <label>
                            Pièce(s) recherchées
                            <textarea type="text" value={parts} onChange={e => setParts(e.target.value)} placeholder='Pièce(s) recherchées'/>
                        </label>
                        <label>
                            Précisions sur couleur, côté, 3 ou 5 portes, manuelle, électrique, etc.
                            <textarea type="text" value={details} onChange={e => setDetails(e.target.value)} placeholder='Précisions'/>
                        </label>
                        <input type="submit" value="Envoyer la demande" />
                    </form>
                    {status && <p className='status'>{status}</p>}
                    <div className='info'>
                        <p style={{marginBottom: '6px'}}>Pour faire une demande par téléphone:</p>
                        <div className='info__line'>
                            <Phone fill='#1F2B25'/>
                            <p>03 21 20 66 00</p>
                        </div>
                        <div className='info__separator'/>
                        <p style={{marginBottom: '6px'}}>Nous acceptons les paiements:</p>
                        <div className='info__line' style={{marginBottom: '3px'}}>
                            <Cash fill='#1F2B25'/>
                            <p>En espèce jusque 1000€</p>
                        </div>
                        <div className='info__line' style={{marginBottom: '8px'}}>
                            <CreditCard fill='#1F2B25'/>
                            <p>En CB sur place</p>
                        </div>
                        <p style={{marginBottom: '11px'}}>Au comptant ou en plusieurs fois - Voir conditions en magasin</p>
                        <div className='info__line'>
                            <Check fill='#1F2B25'/>
                            <p>Nous n’acceptons plus les chèques</p>
                        </div>
                        <div className='info__separator'/>
                        <p style={{marginBottom: '10px'}}>Nous pouvons également vous expédier nos pièces dans toute la France. Renseignez-vous:</p>
                        <div className='info__line'>
                            <Mail fill='#1F2B25'/>
                            <p>expedition@autosysteme.fr</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default PartSearch;
