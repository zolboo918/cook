import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import ChartItem from '../components/ChartItem';
import FoodItem from '../components/CardItem';
import Header from '../components/Header';
import Tab from '../components/Tab';
import {COLORS, FONTS} from '../constants';
import {FoodData, HomeStatData, HomeTab} from '../data/data';
import {getHeight} from '../utils/Dimension';

const Home = () => {
  const data = {
    // labels: [''], // optional
    data: [0.4],
  };

  return (
    <ScrollView style={styles.container}>
      <Header title={'Сайн байна уу?'} />
      <View style={styles.wrapper}>
        <Tab items={HomeTab} />
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTextTitle}>
          ӨНӨӨДРИЙН ИРЦ: &nbsp;&nbsp;&nbsp;
        </Text>
        <Text style={styles.headerText}>100 хүүхэд</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statTitle}>Шимт үзүүлэлтүүд</Text>
        <FlatList
          horizontal
          style={{marginTop: 30}}
          data={HomeStatData}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => <ChartItem item={item} />}
        />
      </View>
      <View style={styles.statsContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.statTitle}>ӨНӨӨДРИЙН ХООЛ: &nbsp;&nbsp;</Text>
          <Text style={styles.statTitle2}>2021.03.22</Text>
        </View>
        <FlatList
          numColumns={2}
          style={{marginTop: 30}}
          data={FoodData}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => <FoodItem item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.DEFAULT_COLOR,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  headerTextTitle: {
    color: COLORS.textColor,
    fontFamily: FONTS.bold,
  },
  headerText: {
    color: COLORS.textColor,
    fontFamily: FONTS.regular,
  },
  statsContainer: {
    marginTop: 37,
    marginLeft: 25,
  },
  statTitle: {
    color: COLORS.textColor,
    fontFamily: FONTS.bold,
    fontSize: 18,
  },
  statTitle2: {
    color: COLORS.textColor,
    fontFamily: FONTS.regular,
    fontSize: 18,
  },
});
