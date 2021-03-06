import React from 'react';

import Graph from '../shared/graph';

import '../../assets/styles/skills.scss';


// Partir sur Chart.js (installé) pour un futur graphique


const Skills = (props) => {

	return (

		<div className="skill-content skills-graph">
			<div className="charts">
				<div className="chart chart--dev">
					<span className="chart__title">FRONT</span>
					<ul className="chart--horiz">
						<Graph label='HTML' style={{ width: "70%" }}/>
						<Graph label='CSS3 & SASS' style={{ width: "60%" }}/>
						<Graph label='Javascript' style={{ width: "50%" }}/>
						<Graph label='ReactJS' style={{ width: "35%" }}/>
						<Graph label='Jquery' style={{ width: "50%" }}/>
					</ul>
				</div>

				<div className="chart chart--dev">
					<span className="chart__title">BACK</span>
					<ul className="chart--horiz">
						<Graph label='PHP' style={{ width: "40%" }}/>
						<Graph label='SQL' style={{ width: "28%" }}/>
						<Graph label='Wordpress' style={{ width: "55%" }}/>
						<Graph label='Nodejs' style={{ width: "20%" }}/>
					</ul>
				</div>

				<div className="chart chart--dev">
					<span className="chart__title">DESIGN</span>
					<ul className="chart--horiz">
						<Graph label='Photoshop' style={{ width: "70%" }}/>
						<Graph label='illustrator' style={{ width: "50%" }}/>
						<Graph label='InDesign' style={{ width: "50%" }}/>
					</ul>
				</div>
			</div>
		</div>
		


	)
}

export default Skills;
