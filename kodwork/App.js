import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './src/pages/jobs';
import FavoriteJobs from './src/pages/favoritejobs';
import DetailJobs from './src/pages/detailjobs';
import JobsProvider from './src/context/provider';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <Drawer.Navigator initialRouteName="Jobs">
        <Drawer.Screen name="Jobs" component={Jobs} />
        <Drawer.Screen name="FavoriteJobs" component={FavoriteJobs} />
      </Drawer.Navigator>
  );
}

export default function App( ) {
  return (
    <JobsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
          />
          <Stack.Screen name="DetailJobs" component={DetailJobs} />
        </Stack.Navigator>
      </NavigationContainer>
    </JobsProvider>
  );
  }