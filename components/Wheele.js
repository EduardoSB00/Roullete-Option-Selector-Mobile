import { useEffect, useState, useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View  } from 'react-native';

export default function Wheel(props) {

    const [winningValue,setWinningValue] = useState({});

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
        100:'#cad7ed'
    }


    const [baseColor,setBaseColor] = useState("#cad7ed");

    useEffect(()=>{
        if(props.rouletteValues[0]){
            setBaseColor(colors[props.rouletteValues[0].key]);
        }
    },[props.rouletteValues]);


    useEffect(()=>{
        setBaseColor(colors[props.winner.key])
    },[props.winner])

    return (
        <View style={styles.container}>
            <View style={[styles.initialCircle,{backgroundColor: baseColor}]}></View>
        </View>
      );
    }
    
    
    const styles = StyleSheet.create({
        initialCircle:{
            width:250,
            height:250,
            borderRadius: 125,
        
        },
        container:{
            flexDirection: "row",
            alignItems:"center",
            justifyContent: "center"
        }
    });
      