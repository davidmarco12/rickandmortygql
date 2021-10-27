import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import store from './app/store'
import {BrowserRouter as Router} from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './Services/client'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <ApolloProvider client={client}>
            <Router>
                <App />
            </Router>
        </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


//serviceWorker.unregister();