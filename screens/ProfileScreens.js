import React, { useState } from "react";
import { View, Text, Image, Switch, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((previousState) => !previousState);

  return (
    <ScrollView
      contentContainerStyle={[styles.container, darkMode ? darkStyles.container : null]}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Image */}
      <Image
        style={styles.avatar}
        source={require("../assets/profile.jpeg")} // Local image from assets folder
      />
      <Text style={[styles.name, darkMode ? darkStyles.text : null]}>Mhieljun Budiongan
      </Text>
      <Text style={[styles.bio, darkMode ? darkStyles.text : null]}>
        Cybersecurity Specialist | Tech Enthusiast
      </Text>

      {/* Mock Analytics */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode ? darkStyles.text : null]}>Analytics</Text>
        <View style={styles.analyticsContainer}>
          <View style={[styles.analyticsCard, { backgroundColor: "#A8D5BA" }]}>
            <Text style={styles.analyticsTitle}>Total Logins</Text>
            <Text style={styles.analyticsValue}>19</Text>
          </View>
          <View style={[styles.analyticsCard, { backgroundColor: "#F7CAC9" }]}>
            <Text style={styles.analyticsTitle}>Last Active</Text>
            <Text style={styles.analyticsValue}>1 days ago</Text>
          </View>
        </View>
        <View style={styles.analyticsContainer}>
          <View style={[styles.analyticsCard, { backgroundColor: "#FFDCA5" }]}>
            <Text style={styles.analyticsTitle}>Projects Completed</Text>
            <Text style={styles.analyticsValue}>24</Text>
          </View>
          <View style={[styles.analyticsCard, { backgroundColor: "#AFCBFF" }]}>
            <Text style={styles.analyticsTitle}>Hours Spent</Text>
            <Text style={styles.analyticsValue}>129</Text>
          </View>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode ? darkStyles.text : null]}>Settings</Text>
        <TouchableOpacity style={[styles.button, darkMode ? darkStyles.button : null]}>
          <Text style={[styles.buttonText, darkMode ? darkStyles.text : null]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, darkMode ? darkStyles.button : null]}>
          <Text style={[styles.buttonText, darkMode ? darkStyles.text : null]}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, darkMode ? darkStyles.button : null]}>
          <Text style={[styles.buttonText, darkMode ? darkStyles.text : null]}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, darkMode ? darkStyles.text : null]}>Appearance</Text>
        <View style={styles.toggleContainer}>
          <Text style={darkMode ? darkStyles.text : null}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            thumbColor={darkMode ? "#fff" : "#000"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

// Dark mode-specific styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    paddingBottom: 20,
  },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#555",
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ProfileScreen;
