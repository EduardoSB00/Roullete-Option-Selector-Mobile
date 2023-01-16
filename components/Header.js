import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>Roullete!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: "#4653AF",
        height: 120,
        width: "100%",
        paddingTop: 60,
        marginBottom: 20
    },
    title:{
        textAlign: "center",
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }
  });