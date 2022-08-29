import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = (props: any) => {
  const {items} = props;
  return (
    <View style={styles.container}>
      {items.map((el: any, index: any) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.itemContainer,
              {width: 100 / items.length + '%'},
              index != items.length - 1
                ? {borderRightWidth: 1, borderRightColor: COLORS.DEFAULT_COLOR}
                : {},
            ]}>
            <Text style={styles.text}>{el.text}</Text>
            <Icon name={el.icon} style={styles.icon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_COLOR,
    borderRadius: 10,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.textColor,
    fontFamily: FONTS.bold,
  },
  icon: {
    fontSize: 18,
    color: COLORS.DEFAULT_COLOR,
    marginHorizontal: 3,
  },
});
