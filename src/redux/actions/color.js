import {SET_COLOR} from '../actionTypes';

export const setColor = (color) => {
    return {
        type: SET_COLOR,
        color,
    };
}

