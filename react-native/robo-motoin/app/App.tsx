import { View, Text, SafeAreaViewBase } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'
import Homee from './Pages/Homee'
import Home from './Pages/Home'

const App = () => {
  return (
   <SafeAreaView>
    <Homee/>
   </SafeAreaView>
  )
}

export default App