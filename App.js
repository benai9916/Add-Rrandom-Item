import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './app/components/searchbar'
import Screen from './app/components/Screen'

export default function App() {
 return <Screen>
   <SearchBar />
 </Screen>
} 