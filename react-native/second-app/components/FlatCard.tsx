import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text style={styles.text}>Blue</Text>
        </View>
          <View style={[styles.card, styles.card3]}>
          <Text style={styles.text}>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
    padding: 10,
    flex:1,
    flexDirection:'row'
  },
  card: {
    flex:1,
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin:8
  },
  card1: {
    backgroundColor: "#ff2e2e",
  },
    card2: {
    backgroundColor: "#2e7effff",
  },
     card3: {
    backgroundColor: "#00b928ff",
  },

  text: {
    color: "#ffff",
  },
});
