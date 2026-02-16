import React, { Component } from "react";
import { styles } from "./styles";
import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { Text, View } from "react-native";

const App = () => {

  const [message, setMessage] = useState("Press me !");
  return (
    <View style={styles.container}>
      <Text style={[styles.char,styles.text]}>Your React is running...</Text>
      <Text style={[styles.char,styles.text]}>{message}</Text>
      <Button onPress={()=>{
        setMessage('Im clicked !')
      }} style={styles.button}>click me !</Button>
    </View>
  );
};



export default App;
