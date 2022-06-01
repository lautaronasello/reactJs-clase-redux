import { GET_CHARACTERS_ERROR, GET_CHARACTERS_SUCCESS, GET_CHARACTER_OK} from '../actionTypes';


export const fetchCharactersSuccess = (characters) => {
    return {
        type: GET_CHARACTERS_SUCCESS,
        payload: characters,
    };
};

export const fetchOneCharacterSuccess = (character) => {
    return {
        type: GET_CHARACTER_OK,
        payload: character,
    };
};

export const fetchCharactersError = (error) => {
    return {
        type: GET_CHARACTERS_ERROR,
        payload: error,
    };
};

export const onFetchCharacters = () => {
    return dispatch => {
        fetch('https://breakingbadapi.com/api/characters')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(fetchCharactersSuccess(data)); 
            })
            .catch(error => {
                dispatch(fetchCharactersError(error));
            });
    }

};

export const onFetchOneCharacter = (userID) => {
    if(userID){
        return dispatch => {
            fetch(`https://breakingbadapi.com/api/characters/${userID}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    dispatch(fetchOneCharacterSuccess(data));
                })
                .catch(error => {
                    dispatch(fetchCharactersError(error));
                });
        }
    }
    return dispatch => {
        dispatch(fetchOneCharacterSuccess([]));
    }
}

