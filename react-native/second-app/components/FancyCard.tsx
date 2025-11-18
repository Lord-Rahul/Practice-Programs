import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Trendy Places</Text>
      </View>
      <View>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: "https://hblimg.mmtcdn.com/content/hubble/img/ttds/mmt/activities/m_bir_billing_5_l_600_900.jpg",
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text> Bir Billing</Text>
          </View>
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
  card: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    overflow: "hidden",
  },

  cardElevated: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  cardImage: {
    width: "100%",
    height: 180,
  },

  cardBody: {
    padding: 10,
  },
});
