import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {setHeight, setWidth} from '../utils/Dimension';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import CounterButton from './CounterButton';

const StateListItem = (props: any) => {
  const {item, iconColor, iconType, onItemPress} = props;
  let iconName = '';
  let color = '';
  switch (item.state) {
    case 'Хүлээгдэж буй':
      iconName = 'alert-circle-outline';
      break;
    case 'Татгалзсан':
      iconName = 'alert-outline';
      break;
    case 'Биелсэн':
      iconName = 'checkbox-marked-circle-outline';
      break;
    case 'Илгээсэн':
      iconName = 'information-outline';
      break;
    case 'Хянасан':
      iconName = 'checkbox-marked-circle-outline';
      break;
    default:
      break;
  }

  switch (item.state) {
    case 'Хүлээгдэж буй':
      color = '#FFA726';
      break;
    case 'Татгалзсан':
      color = '#F44336';
      break;
    case 'Биелсэн':
      color = '#66BB6A';
      break;
    case 'Илгээсэн':
      color = '#29B6F6';
      break;
    case 'Хянасан':
      color = '#66BB6A';
      break;
    default:
      break;
  }

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onItemPress({...item, color, iconName})}>
      <Text style={styles.name}>{item.id}</Text>

      <TouchableOpacity
        style={{
          width: '45%',
          alignItems: 'center',
          height: 40,
          backgroundColor: color,
          borderRadius: 6,
          flexDirection: 'row',
        }}>
        <Icon name={iconName} style={styles.icon} />
        <Text style={styles.rest}>{item.state}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default StateListItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 64,
    borderBottomWidth: 0.5,
    borderColor: COLORS.DEFAULT_COLOR,
    // marginBottom: 10,
  },
  image: {
    width: '40%',
    height: '35%',
  },
  name: {
    color: COLORS.textColor,
    fontSize: 15,
    width: '50%',
    textAlign: 'center',
    marginTop: 5,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
  rest: {
    fontSize: 15,
    fontFamily: FONTS.mulishRegular,
    color: '#fff',
    marginLeft: 18,
  },
});
