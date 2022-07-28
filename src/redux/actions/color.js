import { SET_COLOR, SET_WIDTH } from '../types/actionTypes';

// setColor('red')
export const setColor = (color, width) => {
  return {
    type: SET_COLOR,
    payload: color,
  };
};

export const setWidth = (width) => {
  return {
    type: SET_WIDTH,
    payload: width,
  };
};
