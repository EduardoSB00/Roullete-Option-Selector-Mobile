import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form(props) {


    function handleAddInput(){
        if(props.inputValue == ""){
            Alert.alert("No Text", "You must write something to add an item" ,{text:"Dismiss"})

        } else {
            let values = props.rouletteValues;
            props.setRouletteValues((values)=>([{text:props.inputValue, key: props.keyValue},...values ]))
            handleKeyUpdate();
            props.setInputValue("");
        }
    }

    function handleKeyUpdate(){
        const value = props.keyValue
        props.setKeyValue((value) => (value+1))
    }


  return (
    <View>
        <TextInput placeholder='Add a new item' value={props.inputValue} onChangeText={(val) => {props.setInputValue(val)}} style={styles.input}/>
        <View style={styles.btn}>
            <Button title="Add" color="white"  onPress={handleAddInput}/>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    input: {
        height: 30,
        borderRadius: 5,
        borderColor: "#6772c2",
        borderStyle: "solid",
        borderWidth: 1,
        marginHorizontal: 50,
        paddingHorizontal: 5

    },
    btn:{
        height: 40,
        borderRadius: 5,
        borderColor: "#4653AF",
        borderStyle: "solid",
        backgroundColor: "#6772c2",
        marginHorizontal: 100,
        marginVertical: 20,
        borderWidth: 1
        

    }
  });
  