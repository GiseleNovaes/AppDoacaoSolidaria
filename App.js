import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import RegisterDonorScreen from "./src/screens/RegisterDonorScreen";
import ListDonorsScreen from "./src/screens/ListDonorsScreen";
import RegisterDonationScreen from "./src/screens/RegisterDonationScreen";
import ListDonationsScreen from "./src/screens/ListDonationsScreen";

import firebase from "@react-native-firebase/app";
import "@react-native-firebase/firestore";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "App de Doação Solidária" }}
        />
        <Stack.Screen
          name="RegisterDonor"
          component={RegisterDonorScreen}
          options={{ title: "Cadastrar Doador" }}
        />
        <Stack.Screen
          name="ListDonors"
          component={ListDonorsScreen}
          options={{ title: "Lista de Doadores" }}
        />
        <Stack.Screen
          name="RegisterDonation"
          component={RegisterDonationScreen}
          options={{ title: "Registrar Doação" }}
        />
        <Stack.Screen
          name="ListDonations"
          component={ListDonationsScreen}
          options={{ title: "Lista de Doações" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
