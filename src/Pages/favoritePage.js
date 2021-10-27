import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RickAndMorty} from "../components/Character/List/RickAndMorty";

export const FavoritePage = () => {
    const allCharacters = useSelector(state => state.characters.characters)
    const favorites = useSelector(state => state.characters.favorites)
    const [filterFavorites, setFilterFavorites] = useState(allCharacters.filter(character => favorites.includes(character.id)));

    useEffect(() => {
        setFilterFavorites(allCharacters.filter(character => favorites.includes(character.id)))
    }, [allCharacters, favorites])

    return(
        <RickAndMorty characters = {filterFavorites} />
    );
}