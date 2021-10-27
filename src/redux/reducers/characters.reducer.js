import {
    CHARACTERS_GET_ALL,
    CHARACTER_ADD_FAVORITES
} from '../actions/characters.actions'

const initialState = {
    characters: [],
    favorites: []
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type){

        case CHARACTERS_GET_ALL: {
            return {
                ...state,
                characters: action.data
            }
        }
        case CHARACTER_ADD_FAVORITES: {
            if(state.favorites.includes(action.id)){
                let newFavorites = state.favorites
                return {
                    ...state, favorites: newFavorites.filter(fav => fav !== action.id)
                }
            } else {
                return {
                    ...state, favorites: [...state.favorites, action.id]
                }
            }
        }
        default:
            return state
    }
}

export default charactersReducer;