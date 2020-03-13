import * as types from "./actionTypes";

// action qui change la view

export const setVisibilityView = (view) => {
    console.log('action is loaded')
    return {
        type: types.PAGE_ACTION,
        view
    }
};