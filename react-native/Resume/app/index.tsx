import React, { Component } from "react";
import App from "./App";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default class index extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    );
  }
}
