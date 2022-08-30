import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const CounterButton = (props: any) => {
  const {onAddPress, onRemovePress, unit} = props;
  const [value, setValue] = useState(props.value);
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.button} colors={['#34B558', '#38B673']}>
        <TouchableOpacity onPress={onRemovePress}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          defaultValue={'10'}
          value={value}
          style={styles.value}
          keyboardType="number-pad"
          onChangeText={val => setValue(val)}
        />
        <Text style={styles.unit}>{unit}</Text>
      </View>
      <LinearGradient style={styles.button} colors={['#34B558', '#38B673']}>
        <TouchableOpacity onPress={onAddPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default CounterButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 24,
    width: 24,
    backgroundColor: COLORS.DEFAULT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
    marginTop: 2,
  },
  value: {
    color: COLORS.textColor,
    fontSize: 24,
  },
  unit: {
    color: COLORS.DEFAULT_COLOR,
    marginTop: 5,
    marginRight: 5,
  },
});
