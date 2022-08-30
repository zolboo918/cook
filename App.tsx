import React from 'react';
import {LogBox, Platform, StatusBar, View} from 'react-native';
import {COLORS} from './constants';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import StackNavigation from './navigation/StackNavigation';
import {CustomAlert} from './utils/CustomAlert';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{backgroundColor: COLORS.DEFAULT_COLOR, flex: 1}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNavigation />
          <View style={{height: Platform.OS == 'ios' ? 20 : 0}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#34b564'} />
          </View>
          <CustomAlert />
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
};

export default App;
