import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants';

const MyCheckbox = (props: any) => {
  const {count, value, style, onValueChange} = props;

  return (
    <View style={style}>
      {count > 0 ? (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginLeft: '80%',
            marginTop: 5,
          }}>
          {Array.apply(0, Array(count)).map((el: any, i) => {
            if (typeof value == 'undefined') {
              return (
                <TouchableOpacity
                  style={[styles.container]}
                  onPress={() =>
                    onValueChange(i.toString())
                  }></TouchableOpacity>
              );
            } else if (value == i && value == '0') {
              return (
                <TouchableOpacity
                  style={[styles.container, styles.checkStyle]}
                  onPress={() => onValueChange(i.toString())}>
                  <Icon name={'check'} style={styles.checkIcon} />
                </TouchableOpacity>
              );
            } else if (value == i && value == '1') {
              return (
                <TouchableOpacity
                  style={[styles.container, styles.unCheckStyle]}
                  onPress={() => onValueChange(i.toString())}>
                  <Icon name={'close'} style={styles.unCheckIcon} />
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  style={[styles.container]}
                  onPress={() =>
                    onValueChange(i.toString())
                  }></TouchableOpacity>
              );
            }
          })}
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.container,
            value === '1' ? styles.checkStyle : styles.unCheckStyle,
          ]}
          onPress={onValueChange}>
          <Icon
            name={value === '1' ? 'check' : 'close'}
            style={value === '1' ? styles.checkIcon : styles.unCheckIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyCheckbox;

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.textColor,
  },
  checkStyle: {
    borderColor: COLORS.DEFAULT_COLOR,
  },
  unCheckStyle: {
    borderColor: '#FF0000',
  },
  checkIcon: {
    color: COLORS.DEFAULT_COLOR,
  },
  unCheckIcon: {
    color: '#FF0000',
  },
});
