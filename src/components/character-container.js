import React, { Component } from 'react';
import MainCharacter from '../assets/images/perso-cv.png';
import Skills from './skills';
import SoftSkills from './soft-skills';
import Education from './education';
import Hobbies from './hobbies';
import Environment from './environment';



import Bubble from './shared/bubble';

// Actions 
import * as types from '../actions/actionTypes';

class CharacterContainer extends Component {

	render() {
		return (
			<div className="character main-character">
				<div className='character-information'>
					coucou
					{this.toggleView()}
			</div>
				<img src={MainCharacter} alt="character-cv" />
				<Bubble content='Je code mais je design aussi !' />		
			</div>
		)
	}
};


export default CharacterContainer;

/*
Documentation :

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
Chart of graph.js => https://speckyboy.com/code-snippets-css3-bar-graphs/
*/

