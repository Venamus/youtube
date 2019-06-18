import firebase from 'firebase';
import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Loader from 'react-loader-spinner';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userIsLoggedIn: this.props.authed
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ userIsLoggedIn: true });
            } else {
                this.setState({ userIsLoggedIn: false });
            }
        });
    }

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => false
        }
    };


    renderContent() {
        switch (this.state.userIsLoggedIn) {
            case true:
                return (
                    <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
                );
            case false:
                return (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                );
            default:
                return (
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height="50"
                        width="50"
                        style={{ margin: '0, auto' }}
                    />
                );
        }
    }

    render() {
        return (
            <div >
                { this.renderContent() }
            </div>
        );
    }
}

export default LogIn;
