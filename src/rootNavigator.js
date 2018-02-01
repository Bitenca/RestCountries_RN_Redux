import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/home';
import LoginScreen from './components/LoginForm';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
}, { header: 'screen' }
);

export default RootNavigator;
