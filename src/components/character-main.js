import React from 'react';
import MainCharacter from '../assets/images/perso-cv.png';

const Character = () => {
	return (
		<div className="character main-character">
			<img src={MainCharacter} alt="character-cv"/>
		</div>
	)
};

export default Character;