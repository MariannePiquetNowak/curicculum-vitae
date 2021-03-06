import React from 'react';
import EducationCharacter from '../assets/images/education.png';

import Education from './stateless/education';

import Bubble from './shared/bubble';

const EducationContent = (props) => {

	return (
		<div className="character main-character">
			<div className='character-information'>
				<Education />
			</div>
			<div className="div-character">
				<img src={EducationCharacter} alt="character-cv" />
			</div>
			<Bubble className='bubble' content="Cela m'a permis d'expérimenter le téléprésentiel." />
		</div>
	)
};


export default EducationContent;

/*
Documentation :

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
Chart of graph.js => https://speckyboy.com/code-snippets-css3-bar-graphs/
*/

