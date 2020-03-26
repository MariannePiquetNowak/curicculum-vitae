import React from 'react';
import HobbiesCharacter from '../assets/images/hobbies.png';

import Hobbies from './stateless/hobbies';

import Bubble from './shared/bubble';

const HobbiesContent = (props) => {

	return (
		<div className="character main-character">
			<div className='character-information'>
				<Hobbies />
			</div>
			<div className="div-character">
				<img src={HobbiesCharacter} alt="character-cv" />
			</div>
			<Bubble className='bubble' content='Il en manque non ?' />
		</div>
	)
};


export default HobbiesContent;

/*
Documentation :

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
Chart of graph.js => https://speckyboy.com/code-snippets-css3-bar-graphs/
*/

