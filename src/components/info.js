import React from 'react';

import '../assets/styles/info.scss';

const Info = () => {
	return (
		<div className="tab info-tab">
			<tbody>
				<tr>
					<th scope="col">Nom</th>
					<th scope="col">Sexe</th>
					<th scope="col">Age</th>
				</tr>
				<tr>
					<td>Marianne</td>
					<td>F</td>
					<td>29</td>
				</tr>
				<tr>
					<th colSpan="1">Statut</th>
					<th colSpan="2">Développeuse Web Front-End</th>
				</tr>
			</tbody>
		</div>
	)
}

export default Info;