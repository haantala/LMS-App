import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';


export default function SearchBar() {    
    return (

      <View style={styles.container}>
          <Feather name="search" size={24} color="black" style={{marginRight:10}} />
          <TextInput placeholder="Search.."/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
        alignItems: 'center',
    marginTop:10
  }
});
