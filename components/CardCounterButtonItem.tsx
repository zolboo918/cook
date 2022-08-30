import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import CounterButton from './CounterButton';

const CardCounterButtonItem = (props: any) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <CounterButton unit={item.unit} value={item.value} />
      </View>
    </View>
  );
};

export default CardCounterButtonItem;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '31%',
    marginRight: 10,
    borderWidth: 0.2,
    borderColor: '#858C94',
    borderRadius: 6,
    marginBottom: 10,
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
  buttonContainer: {
    alignSelf: 'center',
  },
});
