import React from 'react';
import EnvironmentCharacter from '../assets/images/environment.png';

import Environment from './stateless/environment';

import Bubble from './shared/bubble';


const EnvironmentContent = (props) => {

	return (
		<div className="character main-character">
			<div className='character-information'>
				<Environment />
			</div>
			<div className="div-character">
				<img src={EnvironmentCharacter} alt="character-cv" />
			</div>
			<Bubble className='bubble' content="Et une machine à café, c'est très important !" />
		</div>
	)
};


export default EnvironmentContent;

/*
Documentation :

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
Chart of graph.js => https://speckyboy.com/code-snippets-css3-bar-graphs/
*/

