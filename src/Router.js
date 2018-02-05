import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/pages/LoginForm';
import Home from './components/pages/Home';
import UserPage from './components/pages/UserAccount';
import UserCountries from './components/pages/UserCountries';
import RatePage from './components/pages/RatePage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} hideNavBar />
                </Scene>

                <Scene key='main'>
                    <Scene
                        title='Todos os Países'
                        key='home' component={Home} hideNavBar initial
                    />
                    <Scene
                        rightTitle='Sair' onRight={() => {
                            firebase.auth().signOut();
                            Actions.login();
                        }}
                        key='userPage' component={UserPage}
                        title='Perfil do Usuário'
                    />
                    <Scene
                        title='Países Avaliados'
                        key='userCountries' component={UserCountries}
                    />
                    <Scene
                        title='Avaliar País'
                        key='ratePage' component={RatePage}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
