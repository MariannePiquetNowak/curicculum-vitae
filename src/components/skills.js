import React from 'react';

// Partir sur Chart.js (installé) pour un futur graphique


const Skills = (props) => {

	// Créer un component de Bar Graph ppour utiliser les props

	return (
		<div className="skill-content skills-graph">
			<div className="charts">
				<div className="chart chart--dev">
					<span className="chart__title">FRONT</span>
					<ul className="chart--horiz">
						<li className="chart__bar" style={{ width: "75%" }}>
							<span className="chart__label">
								HTML5
								</span>
						</li>
						<li className="chart__bar" style={{ width: "68%" }}>
							<span className="chart__label">
								CSS3 & SCSS
								</span>
						</li>
						<li className="chart__bar" style={{ width: "50%" }}>
							<span className="chart__label">
								JavaScript
								</span>
						</li>
						<li className="chart__bar" style={{ width: "35%" }}>
							<span className="chart__label">
								ReactJS
								</span>
						</li>
						<li className="chart__bar" style={{ width: "50%" }}>
							<span className="chart__label">
								jQuery
								</span>
						</li>
					</ul>
				</div>

				<div className="chart chart--dev">
					<span className="chart__title">BACK</span>
					<ul className="chart--horiz">
						<li className="chart__bar" style={{ width: "40%" }}>
							<span className="chart__label">
								PHP
								</span>
						</li>
						<li className="chart__bar" style={{ width: "28%" }}>
							<span className="chart__label">
								SQL
								</span>
						</li>
						<li className="chart__bar" style={{ width: "65%" }}>
							<span className="chart__label">
								Wordpress
								</span>
						</li>
						<li className="chart__bar" style={{ width: "20%" }}>
							<span className="chart__label">
								Node.js
								</span>
						</li>
					</ul>
				</div>

				<div className="chart chart--dev">
					<span className="chart__title">DESIGN</span>
					<ul className="chart--horiz">
						<li className="chart__bar" style={{ width: "70%" }}>
							<span className="chart__label">
								Photoshop
							</span>
						</li>
						<li className="chart__bar" style={{ width: "50%" }}>
							<span className="chart__label">
								Illustrator
							</span>
						</li>
						<li className="chart__bar" style={{ width: "50%" }}>
							<span className="chart__label">
								InDesign
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>


	)
}

export default Skills;

/*

<div className='skill-content'>
		<h3>Front</h3>
			<ul>
				<li>Html5</li>
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
	</div>

*/