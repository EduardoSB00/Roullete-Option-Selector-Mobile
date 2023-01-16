import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
export default function ItemList(props) {

    const colors = {
        0: "#6A96B8",
        1: "#6A70B8",        
        2: "#6AB8A6",
        3: "#B8B66A",
        4: "#6AB87D",
        5: "#B86A8B",
        6: "#B88A6A",
        7: "#A4B86A",
        8: "#6A9CB8",
        9: "#7F6AB8",
        10: "#416AD2",        
    }

  return (
    <View>
        <Text style={styles.title}>Item List</Text>
        <FlatList
            data={props.rouletteValues}
            renderItem={({item})=>(
                <View style={[styles.container, {backgroundColor:colors[item.key]}]}>
                    <Text style={styles.card}>{item.text}</Text>
                    <FontAwesome name="trash" size={24} color="white" onPress={()=>{props.handleDelete(item.text)}}/>   
                </View>
            )}
            
        />
    </View>
  );
}


const styles = StyleSheet.create({
   container:{
    flex: 1,
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    height: 45,
    borderRadius: 6,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    opacity:0.75

   }, 
   card:{
    color: "white"
   },
   title:{
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    opacity: 0.75
   }
  });
  