import React, { Component } from 'react'
import{View,Text} from 'react-native'
export default class SideMenuScreen extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor:'blue',marginRight:100}}>
          <Text>This is SideMenu poprtion</Text>
        </View>
      </View>
    )
  }
}
