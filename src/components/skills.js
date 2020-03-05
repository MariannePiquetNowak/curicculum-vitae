import React from 'react';

// Partir sur Chart.js (installé) pour un futur graphique

const Skills = (props) => {

	const data = [
		{
			"title": "Front", 
			"category": ['HTML', 'CSS', 'Sass', 'Jquery']
		}
	];

	// const listItems = data.map((data, index) => 
	// 	<li key={index}>{data.category}</li>
	// )


			
	return (
		<div className='skill-content'>
			<h1>{data.title}</h1>
				<h3>Front</h3>
					{/* <ul>{listItems}</ul> */}
		</div>
	)
}

export default Skills;




/*
<h3>Front</h3>
<ul>
	<li>Html5 <span></span></li>
	<li>css3</li>
	<li>Sass</li>
	<li>Jquery</li>
	<li>Javascript</li>
	<li>React</li>
</ul>
<h3>Back</h3>
<ul>
	<li>Php</li>
	<li>SQL</li>
	<li>Wordpress</li>
	<li>Node.js</li>
</ul>
<h3>Design</h3>
<ul>
	<li>Photoshop</li>
	<li>Illustrator</li>
	<li>Indesign</li>
	<li>Invision</li>
</ul>
*/