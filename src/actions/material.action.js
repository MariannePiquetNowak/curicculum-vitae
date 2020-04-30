import * as types from "./actionTypes";


export const visibilityVersionMaterial = (viewMaterial) => {
    console.log ('action de la v2 material-ui')
    return {
        type: types.VIEW_MATERIAL, 
        viewMaterial
    }
}