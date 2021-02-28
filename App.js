import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from'./screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Constants from 'expo-constants';
import Profile from './screens/Profile';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const myOption = {
  title:"Home",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:'#006aff'
  }
}

 function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={myOption} />
        <Stack.Screen 
        name="Create" 
        component={CreateEmployee}
        options={{...myOption,title:"Create Employee"}} />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{...myOption,title:"Profile"}} />
      </Stack.Navigator>
    </View>
  );
}

export default ()=>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    
    
  },
});
