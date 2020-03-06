import React from 'react';

const Graph = (props) => {
    return (
        <li className="chart__bar" style={props.style}>
            <span className="chart__label">
                {props.label}
			</span>
        </li>
    )
}

export default Graph;