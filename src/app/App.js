import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import { RickAndMortyContainer } from '../Containers/RickAndMortyContainer';
import { FavoritePage } from "../Pages/favoritePage";
import  CharacterInfo  from '../components/Character/Information/CharacterInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../components/Header/Header'

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center py-4">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
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
