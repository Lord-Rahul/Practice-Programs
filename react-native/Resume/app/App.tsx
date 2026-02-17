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
            uri: "https://res.cloudinary.com/dkvipeywg/image/upload/photo_maker_1_1_nwloab.png",
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

      {/* Summary section */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summaryText}>
          Passionate cybersecurity professional with expertise in network
          security, penetration testing, and threat analysis. Dedicated to
          protecting digital assets and ensuring data integrity through
          innovative security solutions.
        </Text>
      </View>

      {/* Educational section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.degree}>
          <Text style={styles.institite}>
            Baddi University of Emerging Sciences & Technology
          </Text>
          <Text style={styles.duration}>2023-2027</Text>
          <Text style={styles.details}>Bachelors of Technology</Text>
        </View>
        <View style={styles.degree}>
          <Text style={styles.institite}>
            Learn Well Public Sr. Sec. School Bir
          </Text>
          <Text style={styles.duration}>2021-2023</Text>
          <Text style={styles.details}>Senior Secondary Education</Text>
        </View>
      </View>

      {/* skills */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Security</Text>
            <Text style={styles.skillItem}>• Penetration Testing</Text>
            <Text style={styles.skillItem}>• Network Security</Text>
            <Text style={styles.skillItem}>• Vulnerability Assessment</Text>
            <Text style={styles.skillItem}>• Threat Intelligence</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Programming</Text>
            <Text style={styles.skillItem}>• Python</Text>
            <Text style={styles.skillItem}>• JavaScript/TypeScript</Text>
            <Text style={styles.skillItem}>• React Native</Text>
            <Text style={styles.skillItem}>• Bash Scripting</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>Tools</Text>
            <Text style={styles.skillItem}>• Metasploit</Text>
            <Text style={styles.skillItem}>• Wireshark</Text>
            <Text style={styles.skillItem}>• Nmap</Text>
            <Text style={styles.skillItem}>• Burp Suite</Text>
          </View>
        </View>

        {/* Experience */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>CyberSecurity Intern</Text>
          <Text style={styles.company}> SureTrust</Text>
          <Text style={styles.duration}>Nov. 2025 - Present</Text>
          <Text style={styles.jobDescription}>
            • Conducted security audits and vulnerability assessments
          </Text>
          <Text style={styles.jobDescription}>
            • Developed security tools and automation scripts
          </Text>
          <Text style={styles.jobDescription}>
            • Participated in bug bounty programs
          </Text>
        </View>
        <View style={styles.experienceItem}>
          <Text style={styles.jobTitle}>CyberSecurity Intern</Text>
          <Text style={styles.company}> Edunet Foundation</Text>
          <Text style={styles.duration}>May 2025 - July 2025</Text>
          <Text style={styles.jobDescription}>
            • Conducted security audits and vulnerability assessments
          </Text>
          <Text style={styles.jobDescription}>
            • Developed security tools and automation scripts
          </Text>
          <Text style={styles.jobDescription}>
            • Participated in bug bounty programs
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>Social Media Backend</Text>
          <Text style={styles.projectDescription}>
            Built a robust and scalable RESTful backend API for a social media
            platform using latest technologies.
          </Text>
          <Text style={styles.projectTech}>
            Technologies: Node.js, Express.js, MongoDB, JWT
          </Text>
        </View>
        <View style={styles.projectItem}>
          <Text style={styles.projectTitle}>ONS Store</Text>
          <Text style={styles.projectDescription}>
            ons is a full-stack e-commerce app built with React and Express.js,
            featuring product browsing, cart, authentication, and order
            management.
          </Text>
          <Text style={styles.projectTech}>
            Technologies: React, Node.js, Express.js, MongoDB, JWT
          </Text>
        </View>
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
  summaryText: {
    fontSize: 14,
    color: "#34495e",
    lineHeight: 22,
    textAlign: "justify",
  },
  educationItem: {
    marginBottom: 15,
  },
  degree: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
  },
  institite: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 3,
  },
  duration: {
    fontSize: 13,
    // alignSelf: "flex-end",
    color: "#7f8c8d",
    marginBottom: 5,
    // marginRight: 10,
    fontStyle: "italic",
  },
  details: {
    fontSize: 13,
    color: "#555",
    marginTop: 5,
  },
  skillsContainer: {
    gap: 15,
  },
  skillCategory: {
    marginBottom: 15,
  },
  skillCategoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  skillItem: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 4,
    lineHeight: 20,
  },
  experienceItem: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  company: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 13,
    color: "#555",
    marginBottom: 4,
    lineHeight: 20,
  },
  projectItem: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ecf0f1",
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 8,
    lineHeight: 20,
  },
  projectTech: {
    fontSize: 13,
    color: "#3498db",
    fontStyle: "italic",
  },
});

export default App;
