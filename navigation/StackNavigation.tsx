import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';
import ProcessFoodMenuList from '../screens/menu/ProcessFoodMenuList';
import SavedReceipt from '../screens/menu/SavedReceipt';
import ExampleMenu from '../screens/menu/ExampleMenu';
import ProcessFoodMenuDetail from '../screens/menu/ProcessFoodMenuDetail';

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
          <Stack.Screen
            name="ProcessFoodMenu"
            component={ProcessFoodMenuList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProcessFoodMenuDetail"
            component={ProcessFoodMenuDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SavedReceipt"
            component={SavedReceipt}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExampleMenu"
            component={ExampleMenu}
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
