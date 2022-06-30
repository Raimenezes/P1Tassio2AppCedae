import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Camera from './src/components/Camera';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Logo" component={Logo} />
      <Stack.Screen name ="Form" component={Form} />
      <Stack.Screen name ="Camera" component={Camera} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>     
  );
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: "#fff",
       paddingTop:80,
    },
});