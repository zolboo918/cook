import {isEmpty} from 'lodash';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
import {CustomAlert} from './CustomAlert';
import {styles} from './styles';

const Alert = (props: any) => {
  // #FFBB00 - yellow
  const {iconName, color, message, messageTitle} = props;
  const hide = () => {
    CustomAlert.hide();
  };
  return (
    // <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon
          name={'checkmark-circle-outline'}
          size={20}
          style={{marginLeft: 20}}
          color={COLORS.DEFAULT_COLOR}
        />
        <Text style={[styles.modalTitle2, {color: COLORS.textColor}]}>
          {message}
        </Text>

        <TouchableOpacity style={[styles.button]} onPress={hide}>
          <Text style={styles.textStyle}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

export default Alert;
