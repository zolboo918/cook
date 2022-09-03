import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {COLORS} from '../constants';
import Home from '../screens/Home';
import BottomNavigation from './BottomNavigation';
import ProcessFoodMenuList from '../screens/menu/ProcessFoodMenuList';
import SavedReceipt from '../screens/menu/SavedReceiptList';
import ExampleMenu from '../screens/menu/ExampleMenuList';
import ProcessFoodMenuDetail from '../screens/menu/ProcessFoodMenuDetail';
import SavedReceiptDetail from '../screens/menu/SavedReceiptDetail';
import ExampleSubMenu from '../screens/menu/ExampleSubMenu';
import CreateRequirement from '../screens/requirement/CreateRequirement';
import MyRequirement from '../screens/requirement/MyRequirement';
import Health1 from '../screens/health/Health1';
import ReceiveFoodMaterial from '../screens/health/ReceiveFoodMaterial';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName="BottomNavigation">
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
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
            name="SavedReceiptDetail"
            component={SavedReceiptDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExampleMenu"
            component={ExampleMenu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ExampleSubMenu"
            component={ExampleSubMenu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreateRequirement"
            component={CreateRequirement}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyRequirement"
            component={MyRequirement}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Health1"
            component={Health1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ReceiveFoodMaterial"
            component={ReceiveFoodMaterial}
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
