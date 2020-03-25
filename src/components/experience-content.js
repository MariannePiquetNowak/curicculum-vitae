import React from 'react';

import HobbiesCharacter from '../assets/images/hobbies.png';


import Bubble from './shared/bubble';
import Experience from './stateless/experience';

import '../assets/styles/experience.scss';

const ExperienceContent = () => {
    return (
        <div className="character main-character">
			<div className='character-information'>
				<Experience />
			</div>
			<div className="div-character">
				<img src={HobbiesCharacter} alt="character-cv" />
			</div>
			<Bubble className='bubble' content='Il en manque non ?' />
		</div>
    )
}

export default ExperienceContent;