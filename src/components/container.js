import React, { Component } from "react";

// Components stateless
import Info from './info';
import Character from './character-main';

// Styles 
import '../assets/styles/container.scss'
import '../assets/styles/form.scss';
import '../assets/font.scss';


class Container extends Component {
	render() {
		return (
			<div className='container'>
				<Info />
				<Character />
			</div>
		)
	}
}

export default Container;