import React, { Component } from 'react';

import '../assets/styles/form.scss';


class Form extends Component {
	render() {
		return (
			<div className="container-form">
				<form className='form'>
					<h4>Voulez-vous choisir ce personnage ?</h4>
					<div className='button button-form'>
						<button type='submit'>Oui</button>
						<button type='submit'>Non</button>
					</div>
				</form>
			</div>
		)
	}
}

export default Form;