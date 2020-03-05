import React, { Component } from "react";

// Components stateless
import Info from './info';
import CharacterContainer from './character-main';
import Form from './form';
import Category from './shared/category-button';


// Styles 
import '../assets/styles/container.scss'
import '../assets/styles/form.scss';
import '../assets/styles/info.scss';
import '../assets/styles/character.scss';
import '../assets/styles/category.scss';
import '../assets/font.scss';


class Container extends Component {
	render() {
		return (
			<div className='container'>
				<Info />
				<CharacterContainer />
				<div className="category-container">
					<Category name="SKILLS" class="category skills" />
					<Category name="SOFT-SKILLS" class="category soft-skills" />
					<Category name="EDUCATION" class="category education" />
					<Category name="EXPERIENCE" class="category experience" />
					<Category name="HOBBIES" class="category hobbies" />
					<Category name="ENVIRONMENT" class="category environment" />
				</div>
				<Form />
			</div>
		)
	}
}

export default Container;