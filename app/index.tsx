import { StyleSheet, View } from "react-native";
import {AuthContext} from "./context/authContext"
import { useState } from "react";
import { Redirect } from "expo-router";



export default function App() {
const [userData,setUserData]=useState()
  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ userData, setUserData }}>
      <Redirect href={!userData ? "/(routes)/home" : "/(routes)/login"} />
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
