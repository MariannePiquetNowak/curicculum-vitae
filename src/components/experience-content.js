import React from 'react';

import ExperienceCharacter from '../assets/images/experience.png';


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
				<img src={ExperienceCharacter} alt="character-cv" />
			</div>
			<Bubble className='bubble' content="Je m'adapte à vous et vos besoins." />
		</div>
    )
}

export default ExperienceContent;