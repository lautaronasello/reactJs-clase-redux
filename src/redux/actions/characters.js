import axios from 'axios';
import {
  GET_CHARACTERS_ERROR,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTER_OK,
} from '../types/actionTypes';

export const fetchCharactersSuccess = (characters) => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchCharactersError = (error) => {
  return {
    type: GET_CHARACTERS_ERROR,
    payload: error,
  };
};

export const fetchOneCharacterSuccess = (data) => {
  return {
    type: GET_CHARACTER_OK,
    payload: data,
  };
};

export const onFetchCharacters = () => async (dispatch) => {
  try {
    const res = await axios.get('https://breakingbadapi.com/api/characters');
    dispatch({
      type: GET_CHARACTER_OK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CHARACTERS_ERROR,
      payload: error,
    });
  }
};

export const onFetchOneCharacter = (userID) => {
  if (userID) {
    return (dispatch) => {
      fetch(`https://breakingbadapi.com/api/characters/${userID}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchOneCharacterSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchCharactersError(error));
        });
    };
  }
  return (dispatch) => {
    dispatch(fetchOneCharacterSuccess([]));
  };
};
