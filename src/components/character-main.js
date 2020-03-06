import React from 'react';
import MainCharacter from '../assets/images/perso-cv.png';
import Skills from './skills';

const CharacterContainer = () => {
	return (
		<div className="character main-character">
			<div className='character-information'>
				<Skills title='Skills'/>
			</div>
			<img src={MainCharacter} alt="character-cv" />
			<div className='bubble'>
				<span id='character-text'>
					Je code mais je design aussi !
				</span>

				{/* 2 spans qui nous serviront à créer la flèche pointant vers notre personnage */}
				<span id="arrow-border"></span>
				
			</div>
		</div>
	)
};

export default CharacterContainer;

/* 
Documentation : 

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
*/

