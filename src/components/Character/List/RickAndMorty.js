import React, {useEffect, useState} from 'react';
import { Card, Container, Row, Col, Spinner} from 'react-bootstrap';
import './RickAndMorty.scss';
import {CharacterCard} from '../Card/CharacterCard'
import {SearchBar} from '../../SearchBar/SearchBar'

export const RickAndMorty = (props) => {
    const [state, setState] = useState(props.characters);

    const onSearch = (text) => {
        if(text) {
            const results = props.characters.filter(e => e.name.toLowerCase().trim().includes((!text ? "" : text).toLowerCase()));
            setState(results);
        }else{
            setState([]);
        }
    }

    useEffect( ( ) => {
        console.log(state)
    }, [state])

    return(
        <Container>
            <SearchBar onSearch={onSearch}/>
            <Row>
                {
                   state.length > 0 || props.characters.length > 0 ?  ((state.length ? state : props.characters).map((character, index) => (
                        <CharacterCard character={character} key={index} />
                    ))) : <div>Character Not Found</div>
                }
            </Row>
        </Container>
    );
}
