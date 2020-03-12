import * as types from "./actionTypes";

// action qui change la view

export const setVisibilityView = (view) => {
    console.log('view is loaded')
    return {
        type: types.PAGE_ACTION,
        view
    }
};