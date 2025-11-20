import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: "Rahul Verma",
      status: "Online",
      image: "https://avatars.githubusercontent.com/u/144715679?v=4",
    },
    {
      id: 2,
      name: "Aditi Sharma",
      status: "Offline",
      image:
        "https://scontent.cdninstagram.com/v/t51.82787-15/567285145_18387890590193579_4658797739725195847_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=101&ig_cache_key=Mzc0NDc1MDc5ODAyMzg0ODYyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=jcwm1ItUvTwQ7kNvwHr-uyB&_nc_oc=AdklCsajIalvNw-z2PGYLQz3hDedPzxSgmK3tt1BnvSkZBSCJt_JZxqg5f61QlAw8i4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=-TZPh_NxfYR-ToRvHbxm2w&oh=00_AfgKR7MhcVRh4D6j1N4PwWZolq-k_ZmI9smTUWDDVtEnhQ&oe=69244F55",
    },
    {
      id: 3,
      name: "Karan Singh",
      status: "Busy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdDWeJpD-h0EJIftuT91L5DyuxfJcDdAyeQ&s",
    },
    {
      id: 4,
      name: "Priya Thakur",
      status: "Away",
      image:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/priya-thakur-2036285-1712982045.jpg",
    },
    {
      id: 5,
      name: "Aman Gupta",
      status: "Online",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWI5ZjFjZjMtZTdlMi00MDNiLThhYjAtMmZlYzNlNjBkNjk2XkEyXkFqcGc@._V1_.jpg",
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ id, name, status, image }) => (
          <View key={id} style={styles.userCard}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 8,
    color: "#000000ff",
  },

  container: {
    padding: 10,
    gap: 12,
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7e6e6ff",
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginVertical: 10,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#363232ff",
  },

  userStatus: {
    padding: 10,
    fontSize: 14,
    color: "#9e9e9e",
    marginTop: 2,
  },
});
