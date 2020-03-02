import React from 'react';

const Info = () => {
	return (
		<div className="tab info-tab">
			<table>
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
					<th colspan="1">Statut</th>
					<th colspan="2">Développeuse Web Front-End</th>
				</tr>
			</table>
		</div>
	)
}

export default Info;