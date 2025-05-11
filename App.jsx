import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { FontsProvider } from './context/FontsContext';
import Main from './Main';

export default function App() {
  return (
    <ThemeProvider>
      <FontsProvider>
        <StatusBar style='auto'/>
         <NavigationContainer>
          <Main/>
         </NavigationContainer>
      </FontsProvider>
    </ThemeProvider>
  );
}

