import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="BottomNavigation"
            component={BottomNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </View>
  );
}

export default StackNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_COLOR,
    paddingBottom: 0,
    marginBottom: StatusBar.currentHeight ? 0 : -20,
  },
});
