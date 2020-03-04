import React from 'react';


const Category = (props) => {

	return (
		<div>
			<button className={props.class}>{props.name}</button>
		</div>
	)
}


export default Category;