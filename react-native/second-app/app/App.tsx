import ActionCard from "@/components/ActionCard";
import ContactList from "@/components/ContactList";
import ElevatedCard from "@/components/ElevatedCard";
import FancyCard from "@/components/FancyCard";
import FlatCard from "@/components/FlatCard";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text>Hello world !</Text> */}
        <FlatCard />
        <ElevatedCard />
        <ContactList />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  default: {
    backgroundColor: "#4b4747ff",
    color: "#ffffff",
  },
});
