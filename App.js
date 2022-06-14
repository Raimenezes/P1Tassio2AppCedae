import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Camera from './src/components/Camera';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Form/>
    </SafeAreaView>      
  );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: "#fff",
       paddingTop:80,
    },
});