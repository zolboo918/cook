import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MenuListItem = (props: any) => {
  const {item} = props;
  return (
    <View style={styles.itemContainer}>
      <Icon name={item.icon} />
      <Text style={styles.name}>{item.name}</Text>
      <AntDesign name={'arrowright'} style={styles.rightIcon} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 4},
    // shadowRadius: 6,
    // shadowOpacity: 0.2,
    // elevation: 3,
  },
  name: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.textColor,
  },
  rightIcon: {
    fontSize: 20,
    color: COLORS.DEFAULT_COLOR,
  },
});
