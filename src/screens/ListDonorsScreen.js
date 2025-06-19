import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListDonorsScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Tela de Lista de Doadores</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
    text: {
    fontSize: 20,
},
});