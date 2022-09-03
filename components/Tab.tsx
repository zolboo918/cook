import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, shadowStyle} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = (props: any) => {
  const {items, containerStyle, active, textStyle, shadow, onPress} = props;
  const isOrts = items.some((el: any) => el.text == 'Орц');
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        {items.map((el: any, index: any) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onPress(index)}
              style={[
                styles.itemContainer,
                {
                  width:
                    el.text == 'Орц'
                      ? '40%'
                      : isOrts
                      ? '60%'
                      : 100 / items.length + '%',
                  backgroundColor:
                    active == index ? COLORS.DEFAULT_COLOR : undefined,
                  borderRightWidth: index != items.length - 1 ? 1 : undefined,
                  borderRightColor: COLORS.DEFAULT_COLOR,
                },
                active == 0 &&
                  active == index && {
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  },
                active == items.length - 1 &&
                  active == index && {
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  },
              ]}>
              <View
                style={[
                  {
                    width: el.icon ? undefined : el.image ? '60%' : '100%',
                  },
                ]}>
                <Text
                  style={[
                    styles.text,
                    {color: active == index ? '#fff' : COLORS.textColor},
                    textStyle,
                  ]}>
                  {el.text}
                </Text>
              </View>
              <Icon
                name={el.icon}
                style={[
                  styles.icon,
                  {
                    color: active == index ? '#fff' : COLORS.DEFAULT_COLOR,
                  },
                ]}
              />
              {el.image && <Image source={el.image} style={styles.image} />}
            </TouchableOpacity>
          );
        })}
      </View>
      {shadow && (
        <View style={{...shadowStyle, backgroundColor: '#fff', elevation: 8}} />
      )}
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishSemiBold,
    textAlign: 'center',
    fontSize: 13,
  },
  icon: {
    fontSize: 18,
    color: COLORS.DEFAULT_COLOR,
    marginHorizontal: 3,
  },
  image: {
    height: 24,
    width: 24,
  },
});
