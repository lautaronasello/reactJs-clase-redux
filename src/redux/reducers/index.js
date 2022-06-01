import { combineReducers } from "redux";
import charactersData   from "./charactersData";
import colorData from "./colorData";

export default combineReducers({
    charactersData: charactersData,
    colorData: colorData,
    });

