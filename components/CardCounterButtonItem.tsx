import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import CounterButton from './CounterButton';
import {setHeight, setWidth} from '../utils/Dimension';

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
    height: setHeight(20),
    width: '32%',
    marginRight: 5,
    borderWidth: 0.4,
    borderColor: '#858C94',
    borderRadius: 6,
    marginBottom: 10,
  },
  image: {
    height: 80,
    width: setWidth(25),
    alignSelf: 'center',
    // marginTop: 10,
  },
  name: {
    fontSize: 15,
    color: COLORS.textColor,
    textAlign: 'center',
    fontFamily: FONTS.mulishRegular,
    height: 40,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: -10,
  },
});
