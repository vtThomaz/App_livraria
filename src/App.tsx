import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options=
        {{title: '',  headerShown:false, headerStyle:{backgroundColor:'#252525', }, headerTintColor: '#252525' }} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
