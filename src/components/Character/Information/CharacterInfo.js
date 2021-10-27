import React from 'react';
import { Image, Container, Accordion, Panel} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import './CharacterInfo.scss'
import { handlerSeasons } from '../../../helpers'

const CharacterInfo = () => {
    const useLocal = useLocation();
    const {name,status,episode,image, location} = useLocal.state.state;
    return(
        <Container className="d-flex justify-content-center" style={{display:'flex'}}>
            <body className="justify-content-center">
                <p style={{background:'grey'}}><h2>{name}</h2></p>
                <div><Image src={image} rounded height={150} width={150}/></div>
                <article><strong>Status:</strong> {status}</article>
                <article><strong>First Episode:</strong> {episode[0].episode}</article>
                <article><strong>Location: </strong> {location.name}</article>
                <article><strong>Dimension: </strong> {location.dimension}</article>
                <article><strong>Episodes Apear: </strong> {episode.length}</article>
                <h2><strong>Episodes {handlerSeasons(episode)}</strong></h2>
                <div className="accordionEp">
                    <Accordion >    
                        {episode.map((e, key)=>(
                            <Accordion.Item eventKey={key}>
                                <Accordion.Header>{e.name}</Accordion.Header>
                                <Accordion.Body>
                                <strong>Episode:</strong> {e.episode} <br/>
                                <strong>Air Date:</strong> {e.air_date}<br/>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion> 
                </div>
            </body>
        </Container>
    );
}

export default CharacterInfo;