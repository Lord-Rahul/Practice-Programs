import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import App from "./App";

export default class index extends Component {



  render() {
    return (
        <SafeAreaProvider>
    <App/>
      </SafeAreaProvider>
    );
  }
}




