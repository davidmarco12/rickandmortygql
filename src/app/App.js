import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import { RickAndMortyContainer } from '../Containers/RickAndMortyContainer';
import { FavoritePage } from "../Pages/favoritePage";
import  CharacterInfo  from '../components/Character/Information/CharacterInfo'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center py-4">
        <Link to="/rickandmorty" style={{ textDecoration: 'none' }}>
              <h1 class="title">Rick And Morty Characters</h1>
        </Link>
          <Link to="/favcharacters" style={{textDecoration: 'none'}}>
              <h1 class="title">Favorite Characters</h1>
          </Link>
      </div>
      <Switch>
        <Route exact path="/rickandmorty">
          <RickAndMortyContainer />
        </Route>
        <Route path ="/characterInfo">
          <CharacterInfo />
        </Route>
          <Route path ="/favcharacters">
              <FavoritePage/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
