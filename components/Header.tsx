import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS} from '../constants';
import {setHeight} from '../utils/Dimension';

const Header = (props: any) => {
  const {title, leftIcon, rightIcon, leftIconPress, rightIconPress} = props;
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../assets/images/header.png')}
      style={styles.image}>
      <TouchableOpacity
        style={[
          styles.leftContainer,
          {backgroundColor: leftIcon == 'back' ? undefined : '#fff'},
        ]}
        onPress={leftIconPress}>
        <Icon
          name={leftIcon == 'back' ? 'chevron-left' : 'menu'}
          style={[
            styles.leftIcon,
            {color: leftIcon == 'back' ? '#fff' : COLORS.DEFAULT_COLOR},
          ]}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightContainer} onPress={rightIconPress}>
        <MaterialIcons
          name={rightIcon ? rightIcon : 'notifications-none'}
          style={styles.rightIcon}
        />
        <View style={styles.dot} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    height: setHeight(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: setHeight(5),
  },
  leftContainer: {
    backgroundColor: '#fff',
    height: 32,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  titleContainer: {
    width: '40%',
  },
  leftIcon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 28,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  rightContainer: {
    width: 30,
    height: 32,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 22,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#61D644',
    right: 5,
    top: 5,
  },
});
