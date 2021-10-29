import React from "react";
import { Link } from 'react-router-dom';
import '../Header/Header.scss'
import {useSelector} from "react-redux";


export const Header = () => {
    const favorites = useSelector(state => state.characters.favorites);

    return (
        <div className="headerClass">
            <Link to="/" style={{textDecoration: 'none'}}>
                <h1 className="title">Rick And Morty Characters</h1>
            </Link>
            <Link to="/favcharacters" style={{textDecoration: 'none'}}>
                <p className="favorites">Favorite Characters ({favorites ? favorites.length : 0})</p>
            </Link>
        </div>
    );
}