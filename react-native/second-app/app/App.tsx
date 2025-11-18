import ElevatedCard from "@/components/ElevatedCard";
import FlatCard from "@/components/FlatCard";
import React from "react";
import { View, Text, ScrollView,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>Hello world !</Text> */}
        <FlatCard />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  default:{
    backgroundColor:'#4b4747ff',
    color:"#ffffff"
  }
})