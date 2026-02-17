import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const App = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profile}
          source={{
            uri: "https://www.rahulverma.live/_next/image?url=%2Fprofile.jpg&w=1920&q=75",
          }}
        />
        <Text style={styles.name}>Rahul Verma</Text>
        <Text style={styles.title}>Cybersecurity Expert</Text>
        <Text style={styles.tagline}>Securing the world with my skills</Text>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>

        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>●</Text>
          <Text style={styles.contactText}>
            Rahul.23UCS087.btcs@baddiuniv.ac.in
          </Text>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>●</Text>
          <Text style={styles.contactText}>+91 6230525430</Text>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactIcon}>●</Text>
          <Text style={styles.contactText}>Baijnath, Himachal Pradesh</Text>
        </View>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => openLink("https://rahulverma.live")}
        >
          <Text style={styles.contactIcon}>●</Text>
          <Text style={styles.linkText}>rahulverma.live</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => openLink("https://linkedin.com/in/thatrahulverma")}
        >
          <Text style={styles.contactIcon}>●</Text>
          <Text style={styles.linkText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => openLink("https://github.com/lord-rahul")}
        >
          <Text style={styles.contactIcon}>●</Text>
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2c3e50",
    padding: 30,
    alignItems: "center",
    paddingTop: 60,
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 4,
    borderColor: "#fff",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    color: "#ecf0f1",
    marginTop: 5,
  },
  tagline: {
    fontSize: 14,
    color: "#bdc3c7",
    marginTop: 5,
    fontStyle: "italic",
  },
  section: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#3498db",
    paddingBottom: 5,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 10,
    width: 30,
  },
  contactText: {
    fontSize: 14,
    color: "#34495e",
    flex: 1,
  },
  linkText: {
    fontSize: 14,
    color: "#3498db",
    flex: 1,
    textDecorationLine: "none",
  },
});

export default App;
