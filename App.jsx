import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { FontsProvider } from './context/FontsContext';
import Main from './Main';
import { AccountProvider } from './context/AccountContext';
import { SupplayProvider } from './context/SupplayContext';

export default function App() {
  return (
    <ThemeProvider>
      <FontsProvider>
        <AccountProvider>
          <StatusBar style='auto' />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </AccountProvider>
      </FontsProvider>
    </ThemeProvider>
  );
}

