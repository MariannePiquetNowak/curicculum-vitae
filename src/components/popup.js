import React from 'react';

import '../assets/styles/popup.scss'

import * as types from '../actions/actionTypes';


/* 
===== TODO ======
Chercher une solution pour respecter l'UX : 

Lorsque le user clique sur le bouton "fermer" de la popup, 
elle se ferme. Mais on est obligé de recharger la page pour permettre
à ce dernier de relancer la popup des contacts si il clique sur "oui"
du formulaire
*/

const Popup = (props) => {

    return (

        <div id="border">
            <div id='popup' className="popup slider">
                <div className="popup-content">
                    <h2>Vous avez choisi <span>Marianne Piquet-Nowak</span></h2>
                    <h3>Pour contacter ce personnage :</h3>
                    <div className="contact">
                        <h4>Mail</h4>
                        <a href='mailto:mariannexpiquet@gmail.com'>mariannexpiquet@gmail.com</a>
                        <h4>Téléphone</h4>
                        <a href='tel:+330750046765'>07.50.04.67.65</a>
                        <a href="https://www.linkedin.com/in/marianne-piquet-nowak/">Linkedin</a>
                        <a href="https://github.com/MariannePiquetNowak?tab=repositories" alt="github">Github</a>
                        <a href="http://www.marianne-piquet-nowak.fr/">Site web</a>
                        <ul>
                            <li>Habite Brie-Comte-Robert</li>
                            <li>Permis A & B</li>
                        </ul>
                    </div>
                </div>
                <button type='button' className="close-popup" onClick={() => props.addView(types.SKILLS)}>Fermer</button>
            </div>
        </div>
    )
}

export default Popup;