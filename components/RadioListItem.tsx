import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS} from '../constants';
import {Radio} from 'native-base';
import MyCheckbox from './MyCheckbox';

const RadioListItem = (props: any) => {
  const {item} = props;
  const [radioValue, setRadioValue] = useState();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <Icon name="information-outline" style={styles.infoIcon} />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '30%'}}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.unit}>{item.unit}</Text>
      </View>
      <View style={{width: '20%'}}>
        <Text style={[styles.unit, {fontSize: 11, marginTop: 8}]}>
          {item.endDate}
        </Text>
      </View>
      <MyCheckbox
        count={2}
        style={styles.checkItem}
        value={radioValue}
        onValueChange={(val: any) => {
          setRadioValue(val);
        }}
      />
      {/* <MyCheckbox
        style={styles.checkItem2}
        value={radioValue}
        onValueChange={() => setRadioValue(radioValue == '0' ? '1' : '0')}
      /> */}
      {/* <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        flexDirection={'row'}
        value={radioValue}
        onChange={nextValue => {
          setRadioValue(nextValue);
        }}>
        <View style={styles.radioContainer}>
          <View style={{width: '50%'}}>
            <Radio value={item.normal} my={1}></Radio>
          </View>
          <View style={{width: '50%'}}>
            <Radio value={item.notNormal} my={1}></Radio>
          </View>
        </View>
      </Radio.Group> */}
    </View>
  );
};

export default RadioListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoContainer: {
    height: 19,
    width: 19,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DEFAULT_COLOR + '50',
    marginTop: 40,
    marginLeft: 5,
  },
  infoIcon: {
    fontSize: 12,
    color: '#fff',
  },
  image: {
    width: 87,
    height: 56,
    marginTop: -10,
  },
  name: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishRegular,
    fontSize: 15,
    textAlign: 'center',
  },
  unit: {
    color: '#090F8780',
    fontSize: 15,
    fontFamily: FONTS.mulishRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',

    width: '60%',
    marginLeft: '10%',
  },
  checkItem: {
    width: '25%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  checkItem2: {
    width: '15%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
