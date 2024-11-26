import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    fontStyle: "italic",
    marginVertical: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  details: {
    marginVertical: 20,
  },
  section: {
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  analyticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  analyticsCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3, // For shadow effect
  },
  analyticsTitle: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  analyticsValue: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
