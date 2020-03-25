import React from 'react';

const Bubble = (props) => {
    return (
        <div className={props.className}>
            <span id='character-text'>
                {props.content}  
                <a href={props.link} target="_blank" rel="noopener noreferrer">{props.linkContent}</a>  
			</span>

            {/* 2 spans qui nous serviront à créer la flèche pointant vers notre personnage */}
            <span id="arrow-border"></span>
        </div>
    )
}

export default Bubble;