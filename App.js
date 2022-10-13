import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import RootComponent from './src/views/index';
import Profile from './src/views/profile';

const App: () => Node = () =>{
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <RootComponent/>
  );
}

export default App;