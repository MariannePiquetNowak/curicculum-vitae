import React, { Component } from "react";

// Components stateless
import Info from './info';
import CharacterContainer from './character-container';
import Form from './form';
import CategoryButton from './shared/category-button';


// Styles 
import '../assets/styles/container.scss'
import '../assets/styles/form.scss';
import '../assets/styles/info.scss';
import '../assets/styles/character.scss';
import '../assets/styles/category.scss';
import '../assets/styles/skills.scss';
import '../assets/styles/soft-skills.scss';
import '../assets/styles/education.scss';
import '../assets/styles/hobbies.scss';
import '../assets/styles/environment.scss';
import '../assets/font.scss';


// Actions 
import * as types from '../actions/actionTypes';

class Container extends Component {
	
	render() {
		
		return (
			<div className='container'>
				<Info />
				<CharacterContainer />
				<div className="category-container">
					<CategoryButton name="SKILLS" class="category skills" type="button" onClick={() => this.props.addView(types.SKILLS)}/>
					<CategoryButton name="SOFT-SKILLS" class="category soft-skills" type="button" onClick={() => {this.props.addView(types.SOFTSKILLS)}}/>
					<CategoryButton name="EDUCATION" class="category education" type="button" onClick={() => this.props.addView(types.EDUCATION)}/>
					<CategoryButton name="EXPERIENCE" class="category experience" type="button" />
					<CategoryButton name="HOBBIES" class="category hobbies" type="button" onClick={() => this.props.addView(types.HOBBIES)}/>
					<CategoryButton name="ENVIRONMENT" class="category environment" type="button" onClick={() => this.props.addView(types.ENVIRONMENT)}/>
				</div>
				<Form />
			</div>
		)
	}
}

export default Container;