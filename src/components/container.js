import React, { Component } from "react";

import Info from './info';
import Form from './form';
import CategoryButton from './shared/category-button';
import Popup from './popup';

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

	addClass() {

        let elm = document.getElementById('popup')
        let active = elm.classList.remove('active');
        let inactive = elm.classList.add('inactive')
        
        if(elm.className === 'active') {
            return inactive
		} 

	}


	popupView() {
		const view = this.props.view
		switch (view) {
			case types.POPUP:
				return <Popup addClass={() => { this.addClass() }}/>
			default:
				return null
		}
	}

	toggleView() {
		const view = this.props.view;


		switch (view) {
			case types.SOFT_SKILLS:
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

	render() {

		return (
			<div className='container'>
				{this.popupView()}
				<Info />
				{this.toggleView()}
				<div className="category-container">
					<CategoryButton name="SKILLS" class="category skills" type="button" onClick={() => { this.props.addView(types.SKILLS) }} />
					<CategoryButton name="SOFT-SKILLS" class="category soft-skills" type="button" onClick={() => { this.props.addView(types.SOFT_SKILLS) }} />
					<CategoryButton name="EDUCATION" class="category education" type="button" onClick={() => this.props.addView(types.EDUCATION)} />
					<CategoryButton name="EXPERIENCE" class="category experience" type="button" onClick={() => console.log('expérience')} />
					<CategoryButton name="HOBBIES" class="category hobbies" type="button" onClick={() => this.props.addView(types.HOBBIES)} />
					<CategoryButton name="ENVIRONMENT" class="category environment" type="button" onClick={() => this.props.addView(types.ENVIRONMENT)} />
				</div>
				<Form addView={() => { this.props.addView(types.POPUP)}} />
			</div>
		)
	}

}

export default Container;