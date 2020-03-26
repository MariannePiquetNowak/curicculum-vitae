import * as types from "../actions/actionTypes";

// A l'arrivée sur la page, c'est le component skills qui apparait
const initialState = {
    view: types.SKILLS
};

// Mon nouveau future state à l'activation de l'action
const landingPageReducer = (state = initialState, action) => {
    console.log('chargement du reducer', action)
    switch (action.type) {
        case types.PAGE_ACTION:
            return {
                ...state, 
                view: action.view
            }
        default: 
            return state
    }
};

// console.log('Landing reducer', LandingPageReducer)

export default landingPageReducer;
