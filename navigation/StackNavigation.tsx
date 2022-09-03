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
import Menu from '../screens/menu/Menu';
import Requirement from '../screens/requirement/Requirement';
import Health from '../screens/health/Health';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </HomeStack.Navigator>
      </SafeAreaView>
    </View>
  );
}

const MenuStack = createNativeStackNavigator();

export function MenuStackScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <MenuStack.Navigator>
          <MenuStack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <MenuStack.Screen
            name="ProcessFoodMenu"
            component={ProcessFoodMenuList}
            options={{headerShown: false}}
          />
          <MenuStack.Screen
            name="ProcessFoodMenuDetail"
            component={ProcessFoodMenuDetail}
            options={{headerShown: false}}
          />
          <MenuStack.Screen
            name="SavedReceipt"
            component={SavedReceipt}
            options={{headerShown: false}}
          />
          <MenuStack.Screen
            name="SavedReceiptDetail"
            component={SavedReceiptDetail}
            options={{headerShown: false}}
          />
          <MenuStack.Screen
            name="ExampleMenu"
            component={ExampleMenu}
            options={{headerShown: false}}
          />
          <MenuStack.Screen
            name="ExampleSubMenu"
            component={ExampleSubMenu}
            options={{headerShown: false}}
          />
        </MenuStack.Navigator>
      </SafeAreaView>
    </View>
  );
}

const RequirementStack = createNativeStackNavigator();

export function RequirementStackScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <RequirementStack.Navigator>
          <RequirementStack.Screen
            name="Requirement"
            component={Requirement}
            options={{headerShown: false}}
          />
          <RequirementStack.Screen
            name="CreateRequirement"
            component={CreateRequirement}
            options={{headerShown: false}}
          />
          <RequirementStack.Screen
            name="MyRequirement"
            component={MyRequirement}
            options={{headerShown: false}}
          />
        </RequirementStack.Navigator>
      </SafeAreaView>
    </View>
  );
}

const HealthStack = createNativeStackNavigator();

export function HealthStackScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <HealthStack.Navigator>
          <HealthStack.Screen
            name="Healt"
            component={Health}
            options={{headerShown: false}}
          />
          <HealthStack.Screen
            name="Health1"
            component={Health1}
            options={{headerShown: false}}
          />
          <HealthStack.Screen
            name="ReceiveFoodMaterial"
            component={ReceiveFoodMaterial}
            options={{headerShown: false}}
          />
        </HealthStack.Navigator>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DEFAULT_COLOR,
    paddingBottom: 0,
    marginBottom: StatusBar.currentHeight ? 0 : -20,
  },
});
