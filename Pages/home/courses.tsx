import { router } from "expo-router";
import { StyleSheet, View, FlatList, Image, Text, ScrollView, TouchableOpacity} from "react-native";
export default function Courses({navigation }:any) {  
    
    const fakeData = [
        { id: '3',  image: 'https://plus.unsplash.com/premium_photo-1675804669850-a1c3b87589d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: '1', image: 'https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg' },
        { id: '2', image: 'https://img.freepik.com/premium-photo/illustration-leaves-have-dark-black-background-high-resolution-ultra-realistic-photog_941265-21303.jpg' },
    ];
    
    const renderItem = ({item}: any) => {
        return (
        <TouchableOpacity onPress={()=>router.push('/coursedetails')} >
                <Image source={{ uri: item.image }} style={{ width: 275, height: 150, margin: 5 }}/>
        </TouchableOpacity>
    );
  }
  
  const renderItem1 = ({item}: any) => {
    return (
    <View >
            <Image source={{ uri: item.image }} style={{ width: 275, height: 150, margin: 5 }} />
            <Text style={{fontSize:30 ,fontWeight:'bold', margin:5}}>{item.id}</Text>
    </View>
  );}

    return (
        <ScrollView>
        <Text style={styles.courseCategory}>Video Course</Text>
        <View style={styles.container}>   
            <FlatList
             renderItem={renderItem}
             data={fakeData}
             horizontal={true} />       
            </View>
            
            <Text style={styles.courseCategory}>Basic Popular Course</Text>
        <View style={styles.container}>   
            <FlatList
             renderItem={renderItem1}
             data={fakeData}
                    horizontal={true} />   
        </View>
        
        <Text style={styles.courseCategory}>Advance Course</Text>
        <View style={styles.container}>   
            <FlatList
             renderItem={renderItem1}
             data={fakeData}
             horizontal={true} />      
            </View> 
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
    },
    courseCategory: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        marginTop: 20,
    }
});
