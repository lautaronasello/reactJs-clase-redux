import { SET_COLOR } from "../actionTypes";

const initialState = {
    colorHeader: '#075e08',
};

const colorData = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLOR:
            return {
                ...state,
                colorHeader: action.color
            }
        default:
            return state
    }
}


export default colorData;
