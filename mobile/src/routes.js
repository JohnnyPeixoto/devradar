import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native'
import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: "DevRadar       "
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Github Profile              ",
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
      headerTintColor: "#fff",
      headerStyle: {
          backgroundColor: '#6A53B5'

      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontStyle: "normal",
      },
  }
  })
);

export default Routes;