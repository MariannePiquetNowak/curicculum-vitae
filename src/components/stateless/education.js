import React from 'react';

import '../../assets/styles/education.scss';

const Education = () => {
    return (
        <div className='education-content'>
            <h4>2019 - <span>Ecole O'Clock</span> - Formation développeur Web & Web Mobile</h4>
            <p><span>-></span> 3 mois de « socle » : Acquisition des connaissances de base de développement web & web-mobile </p>
            <ul>
                <span><li>Intégrer des pages web en HTML & CSS responsive</li></span>
                <span><li>Développer des fonctionnalités dynamiques en Javascript</li></span>
                <span><li>Concevoir, implémenter et utiliser des bases de données</li></span>
                <span><li>Développer une application serveur en PHP</li></span>
                <span><li>Programmation Orientée Objet</li></span>
                <span><li>Déploiement d'une application web</li></span>
            </ul>
            <p><span>-></span> 1 mois de spécialisation sur le CMS Wordpress</p>
            <ul>
                <span><li>Réaliser un développement spécifique / création des thèmes et plugins</li></span>
                <span><li>Gestion des utilisateurs / Ajout de fonctionnalités de l'interface admin</li></span>
                <span><li>Requêtes Ajax avec WP / Rest API</li></span>
            </ul>

            <h4>2019 - <span>Opquast</span> - Certification Maîtrise de la qualité en projet Web</h4>
            <h5><span>-></span> Score de <span>720/1000</span> : <span>Niveau CONFIRMÉ</span></h5>
            <p><span>Bonne connaissance</span> des bonnes pratiques du Web et du vocabulaire associé.</p>
            <p>Capacités à comprendre et échanger avec les autres professionnels du web.</p>
        </div>
    )
}

export default Education;