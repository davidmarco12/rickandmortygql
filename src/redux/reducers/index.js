import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from "./characters.reducer";

const rootReducer = combineReducers({
    characters: charactersReducer
})

export default rootReducer;