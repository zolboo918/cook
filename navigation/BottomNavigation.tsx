import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {Platform, StatusBar, StyleSheet, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menu from '../screens/Menu';
import Requirement from '../screens/Requirement';
import Health from '../screens/Health';
import {COLORS} from '../constants';

const Tab = createMaterialBottomTabNavigator();
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
        component={Home}
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
        component={Menu}
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
        component={Requirement}
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
        component={Health}
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
