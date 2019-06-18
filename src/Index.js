import firebase from 'firebase';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PrivateRoute from './modules/PrivateRoute.js';
import PublicRoute from './modules/PublicRoute.js';
import Home from './containers/Home.js';
import SearchResults from './containers/SearchResults.js';
import LogIn from './containers/LogIn.js';

firebase.initializeApp({
    apiKey: 'AIzaSyB4pyjfSkpt41AaJCZb-xA5zYySCVuXPT0',
    authDomain: 'phtest-31f58.firebaseapp.com',
    databaseURL: 'https://phtest-31f58.firebaseio.com',
    projectId: 'phtest-31f58',
    storageBucket: 'phtest-31f58.appspot.com',
    messagingSenderId: '677510742516',
    appId: '1:677510742516:web:1c15d12e036f8de7'
});

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userIsLoggedIn: true
        };
    }

    render() {
        return (
            <Router>
                <Link to="/Home"> Home </Link>
                <Link to="/SearchResults"> Search Results </Link>

                <PublicRoute
                    path='/'
                    component={LogIn}
                />
                <PrivateRoute
                    authed={this.state.userIsLoggedIn}
                    path='/SearchResults'
                    component={SearchResults}
                />
                <PrivateRoute
                    authed={this.state.userIsLoggedIn}
                    path='/Home'
                    component={Home}
                />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
