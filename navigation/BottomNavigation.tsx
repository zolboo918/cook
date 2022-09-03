import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';
import {
  HealthStackScreen,
  HomeStackScreen,
  MenuStackScreen,
  RequirementStackScreen,
} from './StackNavigation';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
function BottomTabs() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={false}
      activeColor={COLORS.DEFAULT_COLOR}
      inactiveColor={COLORS.DEFAULT_COLOR}
      labeled={true}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: <Text style={styles.title}>Нүүр</Text>,
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              style={styles.icons}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStackScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'book-open' : 'book-open-outline'}
              color={color}
              style={styles.icons}
            />
          ),

          tabBarLabel: <Text style={styles.title}>Хоолны цэс</Text>,
        }}
      />
      <Tab.Screen
        name="Requirement"
        component={RequirementStackScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? 'checkbox-multiple-marked'
                  : 'checkbox-multiple-marked-outline'
              }
              color={color}
              style={styles.icons}
            />
          ),
          tabBarLabel: <Text style={styles.title}>Шаардах хуудас</Text>,
        }}
      />
      <Tab.Screen
        name="Health"
        component={HealthStackScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'plus-box' : 'plus-box-outline'}
              color={color}
              style={styles.icons}
            />
          ),
          tabBarLabel: <Text style={styles.title}>Эрүүл ахуй</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#fff',
    borderTopWidth: 0.4,
    borderTopColor: COLORS.DEFAULT_COLOR,
    height: 70,
  },
  icons: {
    fontSize: 22,
    height: 22,
    width: 22,
  },
  title: {
    color: '#090F87',
    fontSize: 12,
  },
});
