import React from "react";
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ActionCard = () => {
  const openWebsite = (websiteLInk: string) => {
    Linking.openURL(websiteLInk);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's going on NSS camp 2025 ?</Text>
        </View>
        <Image
          source={{
            uri: "https://i0.wp.com/lpunss.wordpress.com/wp-content/uploads/2015/12/12088354_900258666728972_830138573154131765_n.jpg?w=1000&h=&ssl=1",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Nine volunteers of Lovely Professional University – National
            Service Scheme got an opportunity to be a part of Adventure Camp
            held in Dharmshala, District kangra organized by Ministry of Youth
            Affairs and Sports. The camp was scheduled from 5th October 2015
            to 15 October 2015.
          </Text>
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                "https://lpunss.wordpress.com/2015/10/16/nss-s-10-days-adventure-camp/"
              );
            }}
          >
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  card: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  headingContainer: {
    paddingVertical: 8,
  },
  headerText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 12,
    marginTop: 12,
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginBottom: 8,
  },
  bodyContainer: {
    padding: 12,
  },
  bodyFooter: {
    padding: 12,
    paddingTop: 0,
  },
  footerText: {
    color: "#007bff",
    fontSize: 16,
    fontWeight: "600",
  },
});
