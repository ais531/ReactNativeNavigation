import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
export default class Home extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({componentId}) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {left: {visible: true}},
    });
  }

  goLogin = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'LoginPage',
        options: {topBar: {title: {text: 'LoginPage'}}},
        passProps: {
          subTitle: 'This Properties pass from HomePage',
        },
      },
    });
  };

  goRegPage = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'RegisterPage',
        options: {topBar: {title: {text: 'RegisterPage'}}},
        passProps: {
          subTitle: 'This Properties pass from HomePage',
        },
      },
    });
  };
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: 'yellow',
          flex: 100,
          padding: 15,
        }}>
        <View style={{margin: 5}}>
          <Button onPress={this.goLogin} color={'red'} title="Login" />
        </View>
        <View style={{margin: 5}}>
          <Button onPress={this.goRegPage} title="Registration" />
        </View>
      </View>
    );
  }
}



