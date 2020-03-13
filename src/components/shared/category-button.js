import React from 'react';

import '../../assets/styles/category.scss';



const CategoryButton = (props) => {

	return (
		<div>
			<button 
			className={props.class}
			type={props.type}
			onClick={props.onClick}
			>{props.name}</button>
		</div>
	)
}


export default CategoryButton;