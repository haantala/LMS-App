import color from "@/@core/color";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextType } from '@/app/context/authContext';

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage() {
   const contextData:any|null= useContext(AuthContext)

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '801426667082-pg6ddu5qsg6dqrldchp10r79jp03hm1e.apps.googleusercontent.com',
    webClientId: '801426667082-l2pedgl1gkodc4cb7afgmb4c7vm2p9nh.apps.googleusercontent.com',
    // expoClientId: '801426667082-l2pedgl1gkodc4cb7afgmb4c7vm2p9nh.apps.googleusercontent.com',
    redirectUri:'http://localhost:8081'
      });

  useEffect(() => {
    if (response?.type === "success") {
      getUserData(response.authentication&&response.authentication?.accessToken);
    }
  }, [response]);

  const getUserData = async (token: string | null) => {
    if (token) {
      try {
        const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        contextData.setUserData(data)
      } catch (error) {
        console.error(error);
      }
    }
      };
    

  return (
    <View>
      <Image style={styles.image} source={require("../../assets/images/login.jpg")} />
      <View style={styles.container}>
        <Text style={styles.welcometitle}>Welcome to LMS.</Text>
        <Text style={styles.subtitle}>Login / Signup.</Text>
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <AntDesign name="google" size={34} color="#FFFFFF" />
          <Text style={styles.buttontext}>Sign in With Google.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 25,
    marginTop: -35,
    backgroundColor: "#FFF",
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75
  },
  welcometitle: {
    marginTop: 60,
    fontSize: 45,
    fontWeight: "bold",
  },
  image: {
    maxWidth: 500,
    maxHeight: 300
  },
  subtitle: {
    fontSize: 25,
    marginTop: 200,
    paddingBottom: 25,
  },
  button: {
    backgroundColor: color.primary,
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    alignContent: "center",
    borderRadius: 20
  },
  buttontext: {
    fontSize: 28,
    marginStart: 20,
    color: "#FFFFFF"
  }
});
