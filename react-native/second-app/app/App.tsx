import FlatCard from "@/components/FlatCard";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Hello world !</Text>
        <FlatCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
