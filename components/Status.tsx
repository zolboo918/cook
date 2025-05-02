import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Status = (props: any) => {
  const {item, textStyle} = props;
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
  const icon =
    item.status == 'Хянасан'
      ? 'checkmark-circle'
      : item.status == 'Шаардлага хангаагүй'
      ? 'alert-circle'
      : item.status == 'шаардсан'
      ? 'md-paper-plane'
      : item.status == 'Олгосон'
      ? 'checkmark-circle'
      : '';
  return (
    <View style={[styles.statusContainer, {backgroundColor}]}>
      <View style={styles.statusTextContainer}>
        <Icon name={icon} style={styles.statusIcon} />
        <Text style={[styles.statusText, textStyle]}>{item.status}</Text>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  statusContainer: {
    paddingVertical: 4,
    paddingLeft: 4,
    paddingRight: 6,
    borderRadius: 1,
    marginTop: 5,
  },
  statusTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
  },
  statusIcon: {
    color: '#fff',
    marginRight: 5,
  },
});
