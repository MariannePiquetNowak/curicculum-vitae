import React from 'react';
import '../assets/styles/form.scss';

const Form = (props) => {

	return (
		
		<div className="container-form">
			<form className='form'>
				<h4>Voulez-vous choisir ce personnage ?</h4>
				<div className='button button-form'>
					<button className="button-ok" type='button' onClick={() => props.addView()}>Oui</button>
					<button className="button-no" id="button-no"  type='button' onClick={() => console.log('NOPE')}>
					Non
						<span className="tooltiptext">Tant pis pour vous !</span>
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form;