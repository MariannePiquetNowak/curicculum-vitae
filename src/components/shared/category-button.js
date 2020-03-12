import React from 'react';


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