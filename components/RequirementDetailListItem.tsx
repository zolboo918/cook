import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import Status from './Status';
import Icon from 'react-native-vector-icons/Ionicons';

const RequirementDetailListItem = (props: any) => {
  const {item, onPress} = props;
  const backgroundColor =
    item.status == 'Хянасан'
      ? '#2292FB'
      : item.status == 'Шаардлага хангаагүй'
      ? '#FF0000B2'
      : item.status == 'шаардсан'
      ? '#FFCA28'
      : item.status == 'Олгосон'
      ? '#3DCD65'
      : '';
  return (
    <View style={styles.itemContainer}>
      <View
        style={[
          styles.status,
          {width: item.status == 'Шаардлага хангаагүй' ? '40%' : '20%'},
        ]}>
        <Status item={item} textStyle={{fontSize: 10}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={[styles.top, {alignItems: 'flex-start'}]}>
          <Text style={styles.text}>
            {item.status != 'Шаардлага хангаагүй' && item.status + ' '}огноо
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="calendar" style={styles.calendarIcon} />
            <Text style={styles.textValue}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.top}>
          <Text style={styles.text}>Илгээсэн ажилтан</Text>
          <Text style={styles.textValue}>{item.senderName}</Text>
        </View>
      </View>
      <Text style={styles.textValue}>Тэмдэглэл: </Text>
      <Text style={styles.text}>{item.note}</Text>
      <TouchableOpacity style={styles.bottom} onPress={() => onPress(item)}>
        <Text style={styles.textValue}>Хянасан материал : </Text>
        <TouchableOpacity
          style={[styles.button, {backgroundColor}]}
          onPress={() => onPress(item)}>
          <Text style={styles.buttonText}>Дэлгэрэнгүй</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default RequirementDetailListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderTopWidth: 3,
    borderColor: COLORS.DEFAULT_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  status: {
    alignSelf: 'flex-end',
    width: '24%',
    marginBottom: 20,
  },
  top: {
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 18,
    color: COLORS.DEFAULT_COLOR,
    marginRight: 2,
    marginTop: 10,
  },
  text: {
    color: COLORS.textColor,
    fontSize: 15,
  },
  textValue: {
    color: COLORS.textColor,
    fontSize: 15,
    marginTop: 10,
  },
  button: {
    width: '35%',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
