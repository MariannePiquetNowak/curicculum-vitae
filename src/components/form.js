import React from 'react';
import '../assets/styles/form.scss';

import * as types from '../actions/actionTypes';


const Form = (props) => {

	function addElm() {
		console.log("coucou")
	}

	return (
		
		<div className="container-form">
			<form className='form'>
				<h4>Voulez-vous choisir ce personnage ?</h4>
				<div className='button button-form'>
					<button className="button-ok" type='button' onClick={() => props.addView()}>Oui</button>
					<button className="button-no" type='button' onClick={() => console.log('NOPE')}>Non</button>
				</div>
			</form>
		</div>
	)
}

export default Form;