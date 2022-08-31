import {isEmpty} from 'lodash';
import React, {useContext} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../constants';
// import LoaderContext from "../../contexts/LoaderContext";
import {CustomAlert} from './CustomAlert';
import {styles} from './styles';

const Dialog = (props: any) => {
  const {iconName, color, message, messageTitle, handler} = props;
  // const {loading} = useContext(LoaderContext);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 16}}>
          <Icon name={'alert'} size={30} color={COLORS.textColor} />
          <View style={{marginLeft: 16}}>
            <Text style={styles.modalTitle}>{messageTitle}</Text>
            <Text style={styles.modalText2}>{message}</Text>
          </View>
        </View>
        <View style={[styles.dialogButtonBackground]}>
          <TouchableOpacity
            onPress={() => {
              handler();
              CustomAlert.hide();
            }}
            style={styles.button2}>
            <Text style={styles.textStyle}>Тийм</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => {
              CustomAlert.hide();
            }}>
            <Text style={styles.textStyle2}>Үгүй</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dialog;
