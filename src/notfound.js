import React from 'react';
// import * as types from '../actions/actionTypes';

import './assets/styles/not-found.scss';

import NotFoundGif from './assets/gif/not-found.gif';

// import CategoryButton from './components/shared/category-button';
// import * as types from './actions/actionTypes';


const NotFound = (props) => {
    return (
        <div className="not-found">
            <img src={NotFoundGif} alt='not-found-gif'/>
            {/* <CategoryButton name="RETOUR" class="category environment" type="button" /> */}
        </div>
    )
}

export default NotFound;