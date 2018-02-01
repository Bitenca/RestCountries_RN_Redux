import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import UserPage from './components/UserAccount';
import userCountries from './components/UserCountries';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} hideNavBar />
                </Scene>

                <Scene key='main'>
                    <Scene 
                    title='Todos os Países' initial  
                    key='home' component={Home} hideNavBar 
                    />
                    <Scene 
                    rightTitle='Sair' onRight={() => { }}
                    key='userPage' component={UserPage}
                    title='Perfil do Usuário'
                    />
                    <Scene 
                    title='Países Avaliados'
                    key='userCountries' component={userCountries} 
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
