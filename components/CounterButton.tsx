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
  const [count, setCount] = useState(props.value ? Number(props.value) : 0);
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.button} colors={['#34B558', '#38B673']}>
        <TouchableOpacity
          onPress={() => {
            if (count > 0) setCount(count - 1);
            if (onRemovePress) onRemovePress();
          }}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {count == 0 ? (
          <Text style={{fontSize: 26, marginLeft: 3}}>...</Text>
        ) : (
          <TextInput
            // defaultValue={0}
            value={count.toString()}
            style={styles.value}
            keyboardType="number-pad"
            onChangeText={val => setCount(Number(val))}
          />
        )}
        <Text style={styles.unit}>{unit}</Text>
      </View>
      <LinearGradient style={styles.button} colors={['#34B558', '#38B673']}>
        <TouchableOpacity
          onPress={() => {
            setCount(count + 1);
            if (onAddPress) onAddPress();
          }}>
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
    alignItems: 'center',
    textAlign: 'center',
  },
  unit: {
    color: COLORS.DEFAULT_COLOR,
    marginTop: 5,
    marginRight: 5,
  },
});
