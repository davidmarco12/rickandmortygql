export const CHARACTERS_GET_ALL = 'CHARACTERS_GET_ALL';

export const CHARACTER_ADD_FAVORITES = 'CHARACTER_ADD_FAVORITES'


const characters = {
    charactersGetAll: (data) => ({ type: CHARACTERS_GET_ALL, data }),
    characterAddFavorites: (id) => ({ type: CHARACTER_ADD_FAVORITES, id })
}

export default characters