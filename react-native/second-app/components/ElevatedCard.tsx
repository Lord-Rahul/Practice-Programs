import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>{" "}
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap me</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  container: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
  },
  cardElevated: {
    backgroundColor: "#CAD5E2",
    elevation: 12,
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowColor: "#df000033",
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
});
