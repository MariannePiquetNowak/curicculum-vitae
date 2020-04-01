import React from 'react';
import SoftCharacter from '../assets/images/soft-skills.png';

import SoftSkills from './stateless/soft-skills';

import Bubble from './shared/bubble';

const SoftSkillsContent = (props) => {

	return (
		<div className="character main-character">
			<div className='character-information'>
				<SoftSkills />
			</div>
			<div className="div-character">
				<img src={SoftCharacter} alt="character-cv" />
			</div>
			<Bubble className='bubble' content="En plus, je sais bien faire le café avec de l'instantané !" />
		</div>
	)
};


export default SoftSkillsContent;

/*
Documentation :

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
Chart of graph.js => https://speckyboy.com/code-snippets-css3-bar-graphs/
*/

