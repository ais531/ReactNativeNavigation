import {Navigation} from 'react-native-navigation';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import SideMenuScreen from './SideMenuScreen';
// Navigation.setDefaultOptions({
//   statusBar: {
//     backgroundColor: 'red',
//   },
//   topBar: {
//     background: {
//       color: 'black',
//     },
//     title: {
//       color: 'white',
//     },
//     backButton: {
//       color: 'white',
//     },
//   },
// });

Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('LoginPage', () => Login);
Navigation.registerComponent('RegisterPage', () => Registration);
Navigation.registerComponent('SideMenuPage', () => SideMenuScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu:{
        left:{
            component:{
              name:'SideMenuPage',
            }
        },
        center:{
          stack:{
            options:{
              topBar:{
               rightButtons:{
                 icon:require('./images/menu.png')
               }
              }
            },
            children:[
              {
                component:{
                  name:'HomePage'
                }
              }
            ],
          }
        },
      }
    },
  });
});

