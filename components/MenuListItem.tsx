import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MenuListItem = (props: any) => {
  const {icon, name, onPress} = props;

  return (
    <View>
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <Icon name={icon} style={styles.leftIcon} />
        <Text style={styles.name}>{name}</Text>
        <AntDesign name={'arrowright'} style={styles.rightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_COLOR,
    height: 40,
    borderRadius: 6,
    marginBottom: 20,
    width: '100%',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },

  leftIcon: {
    fontSize: 20,
    color: COLORS.DEFAULT_COLOR,
    width: '10%',
  },
  name: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.textColor,
    width: '80%',
  },
  rightIcon: {
    fontSize: 20,
    color: COLORS.DEFAULT_COLOR,
    width: '10%',
    textAlign: 'right',
  },
});
