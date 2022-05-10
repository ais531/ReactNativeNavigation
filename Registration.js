import React, { Component } from 'react'
import{View,Text} from 'react-native'
export default class Registration extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>This is Registration Page</Text>
        <Text style={{fontSize:20}}>{this.props.subTitle}</Text>
      </View>
    )
  }
}
