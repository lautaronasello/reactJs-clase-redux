import { SET_COLOR, SET_WIDTH } from '../types/actionTypes';

const initialState = {
  colorHeader: '#075e08',
  cardWidth: null,
};

// const [state, setState] = useState({
//   colorHeader: '#075e08',
//   cardWidth: null,
// })

const colorData = (state = initialState, action) => {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        cardWidth: action.payload,
      };
    case SET_COLOR:
      return {
        ...state,
        // {
        //   colorHeader:  '#075e08',
        //   cardWidth: '2rem',
        // }
        colorHeader: action.payload,
        // {
        //   colorHeader:  action.payload => color,
        //   cardWidth: '2rem',
        // }
      };
    case 'SET_BACKGROUND':
      return {
        ...state,
        colorHeader: action.payload,
      };
    default:
      return state;
  }
};

export default colorData;
