import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {setHeight, setWidth} from '../utils/Dimension';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import CounterButton from './CounterButton';

const ProductList = (props: any) => {
  const {item, iconColor, iconType, colStyle, containerStyle, onItemPress} =
    props;
  const iconName = iconType == 'right' ? 'chevron-right' : 'bookmark-outline';
  return (
    <TouchableOpacity
      style={[styles.itemContainer, containerStyle]}
      onPress={onItemPress}>
      <View
        style={[
          {justifyContent: 'center', alignItems: 'center', width: '33%'},
          colStyle,
        ]}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="contain"
          borderTopRightRadius={10}
          borderTopLeftRadius={10}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={[styles.col, colStyle]}>
        <CounterButton value={item.qty} unit={item.unit} />
      </View>
      <View style={[styles.col, colStyle]}>
        <Text style={styles.rest}>{item.rest}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 116,
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
    width: '80%',
    textAlign: 'center',
    marginTop: 5,
  },
  rest: {
    fontSize: 24,
    color: COLORS.textColor + '80',
  },
  col: {
    width: '33%',
    alignItems: 'center',
  },
});
