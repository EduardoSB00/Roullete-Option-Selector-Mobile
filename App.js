import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, Button, ScrollView } from 'react-native';
import Form from "./components/Form"
import Header from './components/Header';
import ItemList from "./components/ItemList"
import Wheel from './components/Wheele';

export default function App() {

  const [inputValue,setInputValue] = useState("");
  const [keyValue,setKeyValue] = useState(0);
  const [rouletteValues,setRouletteValues] = useState([]);
  const [winner,setWinner] = useState({key:100});

  
  function handleWinner(){
    if(rouletteValues.length>0){
      const i = Math.floor(Math.random() * rouletteValues.length)
      setWinner(rouletteValues[i])
    }
  }

  function handleReset(){
    setInputValue("");
    setKeyValue(0);
    setRouletteValues([]);
    setWinner({key:100})
  }

  function handleDelete(key){
    setRouletteValues((rouletteValues)=>(rouletteValues.filter((item)=>(item.text!=key))))
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <ScrollView>
          <View>
            <Header/>
            <Form setInputValue={setInputValue} inputValue={inputValue} setRouletteValues={setRouletteValues} keyValue={keyValue} setKeyValue={setKeyValue}/>
            <Wheel rouletteValues={rouletteValues} winner={winner}/>
            
            <View style={styles.buttonsContainer}>
              <View style={styles.btn}>
                <Button title="Reset" color="white" onPress={handleReset}/>
              </View>

              <View style={styles.btn}>
                <Button title="Start" color="white" onPress={handleWinner}/>  
              </View>
            </View>

            

            {winner && <View style={styles.winnerContainer}>
              <Text style={styles.winner}>The Winner Is:</Text>
              <Text style={styles.winner}>{winner.text}</Text>
            </View>}
            
            <ItemList rouletteValues={rouletteValues} handleDelete={handleDelete}/>
           
          </View>
        </ScrollView>

      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  btn:{
    height: 40,
    borderRadius: 5,
    borderColor: "#4653AF",
    borderStyle: "solid",
    backgroundColor: "#6772c2",
    marginVertical: 20,
    borderWidth: 1,
    marginHorizontal:10,
    width: 100
  },
  winner:{
    textAlign:"center",
    fontWeight:"bold",
    opacity: 0.75,
    fontSize: 30

  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"center"
  },
  winnerContainer:{
    marginVertical: 20
  }

});
