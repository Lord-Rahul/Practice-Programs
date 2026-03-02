import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './pages/Home'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class App extends Component {
  render() {
    return (
      <View>
        <SafeAreaView>
        <Home/>
        </SafeAreaView>
      </View>
    )
  }
}
