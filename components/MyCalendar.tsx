import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {COLORS, FONTS} from '../constants';

const MyCalendar = (props: any) => {
  const {onDayPress} = props;
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);

  const initialDate = `${date.getFullYear()}-${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
  }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;

  return (
    <View>
      <Calendar
        customHeaderTitle={
          <Text
            style={{color: COLORS.textColor, fontFamily: FONTS.mulishBlack}}>
            {date.getFullYear()} оны {month} сар
          </Text>
        }
        theme={{
          agendaDayNumColor: 'red',
          dayTextColor: COLORS.textColor,
          selectedDotColor: '#ffffff',
          todayTextColor: COLORS.textColor,
          textDayFontWeight: '300',
          textDayFontSize: 14,
          textMonthFontSize: 14,
          textDayHeaderFontSize: 14,
        }}
        initialDate={initialDate}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2049-05-30'}
        onDayPress={onDayPress}
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={month => {
          console.log('month changed', month);
          setMonth(month.month);
        }}
        firstDay={1}
        hideDayNames={false}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default MyCalendar;

const styles = StyleSheet.create({});
