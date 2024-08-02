import { StyleSheet, View, FlatList, Image} from "react-native";
export default function Slider() {  
    
    const fakeData = [
        { id: '1', image: 'https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg' },
        { id: '2', image: 'https://img.freepik.com/premium-photo/illustration-leaves-have-dark-black-background-high-resolution-ultra-realistic-photog_941265-21303.jpg' },
        { id: '3',  image: 'https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];
    
    const renderItem = ({item}: any) => {
        return (
        <View >
          <Image source={{ uri: item.image }} style={{width:500,height:200,margin:5}} />
        </View>
      );}

    return (
      <View style={styles.container}>   
            <FlatList
             renderItem={renderItem}
             data={fakeData}
             horizontal={true} />      
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
    marginTop:15
  }
});
