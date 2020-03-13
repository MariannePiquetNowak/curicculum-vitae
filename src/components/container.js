import React, { Component } from "react";

import Info from './info';
import Form from './form';
import CategoryButton from './shared/category-button';

// Stateless Components 
import SkillsContent from './skills-content';
import SoftSkillsContent from './softskills-content';
import EducationContent from "./education-content";
import HobbiesContent from "./hobbies-content";
import EnvironmentContent from "./environment-content";

// Styles 
import '../assets/styles/container.scss'
import '../assets/styles/character.scss';
import '../assets/font.scss';


// Actions 
import * as types from '../actions/actionTypes';

class Container extends Component {

	toggleView() {
		const view = this.props.view;

		switch(view) {
			case types.SOFTSKILLS:
				return <SoftSkillsContent />
			case types.EDUCATION:
				return <EducationContent />
			case types.HOBBIES:
				return <HobbiesContent />
			case types.ENVIRONMENT:
				return <EnvironmentContent />
			default:
				return <SkillsContent />
		}
	}

	render () {
			
		return (
			<div className='container'>
				<Info />
				{this.toggleView()}
				<div className="category-container">
					<CategoryButton name="SKILLS" class="category skills" type="button" onClick={() => { this.props.addView(types.SKILLS) }}/>
					<CategoryButton name="SOFT-SKILLS" class="category soft-skills" type="button" onClick={() => { this.props.addView(types.SOFTSKILLS) }} />
					<CategoryButton name="EDUCATION" class="category education" type="button" onClick={() => this.props.addView(types.EDUCATION)} />
					<CategoryButton name="EXPERIENCE" class="category experience" type="button" />
					<CategoryButton name="HOBBIES" class="category hobbies" type="button" onClick={() => this.props.addView(types.HOBBIES)} />
					<CategoryButton name="ENVIRONMENT" class="category environment" type="button" onClick={() => this.props.addView(types.ENVIRONMENT)} />
				</div>
				<Form />
			</div>
		)
	}

}

export default Container;