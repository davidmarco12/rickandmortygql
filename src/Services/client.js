//Configuracion de Apollo Client
import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

export const ALL_CHARACTERS = gql`
  query allCharacters{
      characters{
        results{
          id
          name
          image
          gender
          episode{
            id
            episode
            name
            air_date
            created
          }
          status
          species
          location{
              name
              dimension
          }
        }
      }
    }
  `



  