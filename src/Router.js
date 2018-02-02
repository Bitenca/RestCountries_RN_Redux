import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import UserPage from './components/UserAccount';
import UserCountries from './components/UserCountries';
import RatePage from './components/RatePage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} hideNavBar />
                    <Scene 
                    title='Todos os Países'  
                    key='home' component={Home} hideNavBar initial
                    />
                </Scene>

                <Scene key='main'>
                    <Scene 
                    title='Todos os Países'  
                    key='home' component={Home} hideNavBar initial
                    />
                    <Scene 
                    rightTitle='Sair' onRight={() => Actions.ratePage()}
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
