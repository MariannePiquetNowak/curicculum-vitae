import React, { Component } from "react";

// Components stateless
import Info from './info';
import Character from './character-main';
import Form from './form';


// Styles 
import '../assets/styles/container.scss'
import '../assets/styles/form.scss';
import '../assets/styles/info.scss';
import '../assets/styles/character.scss';
import '../assets/font.scss';


class Container extends Component {
	render() {
		return (
			<div className='container'>
				<Info />
				<Character />
				<Form />
			</div>
		)
	}
}

export default Container;