import React, { Component } from 'react'
import{View,Text} from 'react-native'
export default class Login extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'blue',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>This is Login Page</Text>
        <Text style={{fontSize:20}}>{this.props.subTitle}</Text>
      </View>
    )
  }
}
