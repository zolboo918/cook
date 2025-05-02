import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Status from './Status';

const RequirementListItem = (props: any) => {
  const {item, onPress} = props;
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.description}>{item.grade}</Text>
            <Text style={[styles.description, {marginLeft: 7}]}>
              {item.category}
            </Text>
          </View>
        </View>
        <Status item={item} />
      </View>
      <View style={styles.bottomContainer}>
        <Action item={item} />
        <Text style={styles.description2}>{item.date}</Text>
        <Text style={styles.description2}>{item.dayOfWeek}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RequirementListItem;

const Action = (props: any) => {
  const {item} = props;

  const backgroundColor =
    item.status == 'Хянасан' || item.status == 'шаардсан'
      ? '#12AA7318'
      : item.status == 'Шаардлага хангаагүй'
      ? '#DB00FF40'
      : item.status == 'Олгосон'
      ? '#FF000030'
      : '';

  const textColor =
    item.status == 'Хянасан' || item.status == 'шаардсан'
      ? '#00823D'
      : item.status == 'Шаардлага хангаагүй'
      ? '#DB00FF'
      : item.status == 'Олгосон'
      ? '#FC0101'
      : '';

  return (
    <View style={[styles.actionContainer, {backgroundColor}]}>
      <Text style={{color: textColor, fontSize: 12}}>{item.action}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 7,
    shadowColor: COLORS.DEFAULT_COLOR + '70',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
    marginBottom: 10,
    paddingBottom: 12,
    width: '98%',
    marginLeft: '1%',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.textColor,
    fontSize: 14,
  },
  description: {
    color: '#5357AB',
    fontWeight: '100',
    fontSize: 9,
    fontFamily: FONTS.comissionerItalic,
  },
  description2: {
    color: '#5357AB',
    fontWeight: '100',
    fontSize: 12,
    fontFamily: FONTS.comissionerItalic,
  },
  actionContainer: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginTop: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingRight: 10,
  },
});
