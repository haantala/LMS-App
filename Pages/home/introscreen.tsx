import { AuthContext } from "@/app/context/authContext";
import { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default function IntroScreen() {
    const contextData = useContext(AuthContext)     
    return (
   
            <View style={styles.container}>
                <View>
                <Text>Hello,</Text>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Harsh Antala</Text>
                {/* <Text style={{fontSize:20, fontWeight:"bold"}}>{contextData?.userData?.given_name} {contextData?.userData?.family_name}</Text> */}
                </View>
                 <Image source={require("../../assets/images/login.jpg")} style={{height:40,width:40,borderRadius:100}} /> 

            {/* <Image source={{ uri: contextData?.userData?.picture }} style={{height:40,width:40,borderRadius:100}} /> */}
      </View>
            
  );
}

const styles = StyleSheet.create({
  container: {
    cursor: "pointer",
    justifyContent:'space-between',
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    borderRadius: 20,
    minWidth: 400,
    maxWidth:500
    
  }
});
