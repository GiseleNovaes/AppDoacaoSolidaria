import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function RegisterDonorScreen({ navigation }) {
    const [nomeDoador, setNomeDoador] = useState('');
    const [telefoneDoador, setTelefoneDoador] = useState('');
    const [emailDoador, setEmailDoador] = useState('');

    const handleRegisterDonor = async () => {
    if (!nomeDoador || !telefoneDoador) {
        Alert.alert('Erro no Cadastro', 'Por favor, preencha o nome e o telefone do doador.');
        return;
    }

    try {
        await firestore().collection('doadores').add({
        nome: nomeDoador,
        telefone: telefoneDoador,
        email: emailDoador,
        dataCadastro: firestore.FieldValue.serverTimestamp(),
    });

    Alert.alert('Sucesso!', 'Doador cadastrado com sucesso!');

    setNomeDoador('');
    setTelefoneDoador('');
    setEmailDoador('');

    } catch (error) {
    console.error("Erro ao cadastrar doador: ", error);
    Alert.alert('Erro', 'Não foi possível cadastrar o doador. Tente novamente.');
    }
};

return (
    <View style={styles.container}>
    <Text style={styles.title}>Cadastrar Novo Doador</Text>

    <TextInput
        style={styles.input}
        placeholder="Nome Completo do Doador"
        value={nomeDoador}
        onChangeText={setNomeDoador}/>

    <TextInput
        style={styles.input}
        placeholder="Telefone (ex: 99 99999-9999)"
        value={telefoneDoador}
        onChangeText={setTelefoneDoador}
        keyboardType="phone-pad"/>

    <TextInput
        style={styles.input}
        placeholder="E-mail (opcional)"
        value={emailDoador}
        onChangeText={setEmailDoador}
        keyboardType="email-address"
        autoCapitalize="none"/>

    <Button
        title="Cadastrar Doador"
        onPress={handleRegisterDonor}
        color="#28a745"
    />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#343a40',
},
input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
},
});