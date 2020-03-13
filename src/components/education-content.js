import React from 'react';
import MainCharacter from '../assets/images/perso-cv.png';

import Education from './stateless/education';

import Bubble from './shared/bubble';

const EducationContent = (props) => {

	return (
		<div className="character main-character">
			<div className='character-information'>
				<Education />
			</div>
			<img src={MainCharacter} alt="character-cv" />
			<Bubble content='Je code mais je design aussi !' />
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

