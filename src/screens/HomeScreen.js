import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function HomeScreen({ navigation }) {
return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo(a) ao App de Doação Solidária!</Text>
        <Text style={styles.subtitle}>Sua plataforma para gerenciar doações.</Text>
        <Button
        title="Cadastrar Novo Doador"
        onPress={() => navigation.navigate('RegisterDonor')}
        color="#60B5FF"/>
    <View style={styles.spacer}/> 
        <Button
        title="Ver Lista de Doadores"
        onPress={() => navigation.navigate('ListDonors')}
        color="#537D5D"/>
    <View style={styles.spacer} />
        <Button
        title="Registrar Nova Doação"
        onPress={() => navigation.navigate('RegisterDonation')}
        color="#FFB433"/>
    <View style={styles.spacer} />
        <Button
        title="Ver Lista de Doações"
        onPress={() => navigation.navigate('ListDonations')}
        color="#F4631E"/>
    </View>
);
}

// Estilos para a tela HomeScreen
const styles = StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#EEF1DA', 
},
    title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    textAlign: 'center', 
    color: '#343a40',
},
    subtitle: {
    fontSize: 16,
    marginBottom: 30, 
    textAlign: 'center',
    color: '#6c757d', 
},
    spacer: {
    height: 15, 
},
});
