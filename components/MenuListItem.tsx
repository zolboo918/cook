import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MenuListItem = (props: any) => {
  const {leftIcon, rightIcon, name, iconType, onPress} = props;

  return (
    <View>
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        {leftIcon && (
          <View style={{width: '7.5%'}}>
            {iconType == 'MaterialCommunityIcons' ? (
              <MaterialCommunityIcons name={leftIcon} style={styles.leftIcon} />
            ) : iconType == 'MaterialIcons' ? (
              <MaterialIcons name={leftIcon} style={styles.leftIcon} />
            ) : (
              <Icon name={leftIcon} style={styles.leftIcon} />
            )}
          </View>
        )}
        <Text style={[styles.name, {width: leftIcon ? '85%' : '92.5%'}]}>
          {name}
        </Text>
        <AntDesign
          name={rightIcon ? rightIcon : 'arrowright'}
          style={styles.rightIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_COLOR,
    height: 44,
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
  },
  name: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.textColor,
    width: '85%',
  },
  rightIcon: {
    fontSize: 20,
    color: COLORS.DEFAULT_COLOR,
    width: '7.5%',
    textAlign: 'right',
  },
});
