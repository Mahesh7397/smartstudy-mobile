import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './context/ThemeContext';
import { FontsProvider } from './context/FontsContext';
import Main from './Main';
import { SupplayProvider } from './context/SupplayContext';


export default function App() {
  return (
    <ThemeProvider>
      <FontsProvider>
        <SupplayProvider>
          <StatusBar style='auto' />
            <Main />
        </SupplayProvider>
      </FontsProvider>
    </ThemeProvider>
  );
}

