import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const CardItemList = (props: any) => {
  const {item, index} = props;
  return (
    <View style={[styles.container]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.unit}>{item.unit}</Text>
    </View>
  );
};

export default CardItemList;

const styles = StyleSheet.create({
  container: {
    width: '31%',
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.DEFAULT_COLOR,
  },
  image: {
    height: 56,
    alignSelf: 'center',
  },
  name: {
    fontSize: 15,
    color: COLORS.textColor,
    textAlign: 'center',
    fontFamily: FONTS.regular,
    height: 40,
  },
  unit: {
    fontSize: 12,
    color: '#a9a9a9',
    textAlign: 'center',
    height: 40,
  },
});
