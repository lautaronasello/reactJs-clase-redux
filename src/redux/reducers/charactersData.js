import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTER_OK,
  GET_CHARACTERS_SUCCESS,
} from '../types/actionTypes';

const initialState = {
  characters: [],
  error: null,
  character: [],
};

const charactersData = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        nuevaPropiedad: action.payload,
      };
    case GET_CHARACTER_OK:
      return {
        ...state,
        character: action.payload,
      };
    case GET_CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersData;
