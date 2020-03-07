import React from 'react';


const CategoryButton = (props) => {

	return (
		<div>
			<button className={props.class}>{props.name}</button>
		</div>
	)
}


export default CategoryButton;