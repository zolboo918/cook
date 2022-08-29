import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {isEmpty} from 'lodash';
import {setWidth, setHeight} from '../utils/Dimension';
import {hexToRgb} from '../utils/helper';
import {FONTS} from '../constants';

const ChartItem = (props: any) => {
  const {item} = props;
  return (
    <View style={styles.statItemContainer}>
      <ProgressChart
        data={[Number(item.percent) / 100]}
        width={setWidth(30)}
        height={setHeight(13)}
        strokeWidth={12}
        hideLegend
        radius={40}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: '#fff',
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) =>
            `rgba(${hexToRgb(item.color.split('#')[1])},${opacity})`,
        }}
      />
      <View
        style={[
          styles.statValueContainer,
          {
            top: !isEmpty(item.unit) ? setHeight(6.5) : setHeight(7),
          },
        ]}>
        <Text
          style={[
            styles.statValue,
            {
              fontSize: !isEmpty(item.unit) ? 20 : 28,
              lineHeight: !isEmpty(item.unit) ? 20 : 28,
            },
          ]}>
          {item.value}
        </Text>
        <Text style={styles.statUnit}>{item.unit}</Text>
      </View>
      <View style={styles.statTextContainer}>
        <View>
          <Text style={styles.statDataTitle}>{item.title}</Text>
          <Text style={styles.lavlah}>Лавлах хэмжээ</Text>
        </View>
        <Text
          style={[
            styles.statDifference,
            {
              color:
                item.difference.substr(0, 1) == '+' ? '#93C44B' : '#FB9630',
            },
          ]}>
          {item.difference}
        </Text>
      </View>
    </View>
  );
};

export default ChartItem;

const styles = StyleSheet.create({
  statItemContainer: {
    height: setHeight(20),
    width: setWidth(27),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  statValueContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: setHeight(4),
  },
  statValue: {
    color: '#172600',

    fontWeight: 'bold',
  },
  statUnit: {
    color: '#17260050',
    fontSize: 12,
    lineHeight: 12,
  },
  statTextContainer: {
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  statDataTitle: {
    color: '#172600',
    fontFamily: FONTS.bold,
    fontSize: 12,
  },
  lavlah: {
    color: '#9B9B9B',
    fontSize: 5,
  },
  statDifference: {
    fontSize: 13,
    marginLeft: 5,
  },
});
