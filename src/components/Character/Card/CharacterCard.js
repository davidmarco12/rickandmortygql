import {Card, Col, Button} from "react-bootstrap";
import React from "react";
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Actions from "../../../redux/actions";
import { VscStarEmpty, VscStarFull } from 'react-icons/vsc'

export const CharacterCard = (props) => {
    const history = useHistory();
    const character = props.character;
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.characters.favorites);
    const routerHandler = (character) => {
        history.push("/characterInfo", {state: character});
    }
    const handlerStatus = (status) => {
        const firstStatus = status === 'Alive' ? 'dotGreen' : 'dotRed';
        return (firstStatus === 'dotRed' && status === 'unknown') ? 'dotGrey' : firstStatus;
    }

    const addToFavorite = (id) => {
        dispatch(Actions.characters.characterAddFavorites(id))
    }

    return (
        <Col md={6} lg={4} className="mb-3" hey={character.id}>
            <Card style={{ width: '19rem', cursor: "pointer", borderRadius: "0.5rem"}} >
                <Card.Img
                    variant="top"
                    src = {character.image}
                    width={250}
                    heigth={200}
                    onClick={() => routerHandler(character)}
                />
                <Card.Body style={{background:'grey'}}>
                    <Card.Title
                        className="text-center"
                        style={{color:'yellow', fontWeight: '800'}}
                    >{character.name}
                    </Card.Title>
                    <Card.Text >
                        <article className="d-flex justify-content-between">
                            <p><strong>Status:</strong> <span className={handlerStatus(character.status)}></span> {character.status}</p>
                            <p><strong>Race:</strong> {character.species}</p>
                        </article >
                        <article className="d-flex justify-content-between">
                            <p><strong>Gender:</strong> {character.gender}</p>
                        </article>
                        <article className="d-flex justify-content-between">
                            <p><strong>First Episode:</strong> {character.episode[0].name}</p>
                        </article>
                    </Card.Text>
                    {
                        !favorites.includes(character.id) ? <VscStarEmpty size={32}  onClick={() => addToFavorite(character.id)}/>
                            : <VscStarFull size={32} color="yellow" onClick={() => addToFavorite(character.id)}/>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}