import React from 'react';
import {useQuery} from "@apollo/client";
import {ALL_CHARACTERS} from "../Services/client";
import {Spinner} from "react-bootstrap";
import {RickAndMorty} from "../components/Character/List/RickAndMorty";
import {useDispatch, useSelector} from "react-redux";
import Actions from "../redux/actions";

export const RickAndMortyContainer = () => {
    const dispatch = useDispatch()
    const {data, loading, error} = useQuery(ALL_CHARACTERS);
    if(loading){
        return(
            <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="primary" width={150} height={150}/>
            </div>
        );
    }

    if(error) return <p>Error! Error! Error! Error! Error!</p>;

    if(data){
        dispatch(Actions.characters.charactersGetAll(data.characters.results))
    }

    return(
        <div>
            <RickAndMorty characters = {data.characters.results}/>
        </div>
    );
}