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

	// fonction qui permettra de changer les views
	toggleView() {
		// Initialisation d'une variable pour rédcupérer l'action de MapStateToProps
		const view = this.props.view

		switch (view) {
			case types.SOFTSKILLS:
				return <SoftSkills addView={this.props.addView} />
			case types.EDUCATION:
				return <Education addView={this.props.addView} />
			case types.HOBBIES:
				return <Hobbies addView={this.props.addView} />
			case types.ENVIRONMENT:
				return <Environment addView={this.props.addView} />
			default:
				return <Skills addView={this.props.addView} />
		}
	}

	render() {
		return (
			<div className="character main-character">
				<div className='character-information'>
					{this.toggleView()}
				</div>
				<img src={MainCharacter} alt="character-cv" />
				<Bubble content='Je code mais je design aussi !' />
			</div>
		)
	}
};

// const CharacterContainer = (props) => {

// 	return (
// 		<div className="character main-character">
// 			<div className='character-information'>
// 				{this.props.toggleView()}
// 			</div>
// 			<img src={MainCharacter} alt="character-cv" />
// 			<Bubble content='Je code mais je design aussi !' />
// 		</div>
// 	)

// };

export default CharacterContainer;

/*
Documentation :

Tableau : @https://openclassrooms.com/forum/sujet/reactjs-tableau-affichage-js
Bulle de BD : @http://www.lackofinspiration.com/news-3-107-quand-les-css3-se-mettent-au-service-de-la-bd.html

Chart.js => @https://www.chartjs.org/docs/latest/charts/bar.html
Chart of graph.js => https://speckyboy.com/code-snippets-css3-bar-graphs/
*/

