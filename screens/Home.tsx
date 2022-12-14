import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import ChartItem from '../components/ChartItem';
import Header from '../components/Header';
import Tab from '../components/Tab';
import {COLORS, FONTS} from '../constants';
import {FoodData, HomeStatData, HomeTab} from '../data/data';
import {getHeight} from '../utils/Dimension';
import CardItem from '../components/CardItem';

const Home = () => {
  const [activeTab, setActiveTab] = useState();
  const data = {
    // labels: [''], // optional
    data: [0.4],
  };

  const onTabPress = (index: any) => {
    setActiveTab(index);
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        title={'Сайн байна уу?'}
        titleStyle={{fontSize: 24, marginTop: '5%'}}
        rightIconShow={true}
      />
      <View style={styles.wrapper}>
        <Tab
          items={HomeTab}
          activeTab={activeTab}
          textStyle={{fontFamily: FONTS.bold}}
          onPress={onTabPress}
        />
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
          renderItem={({item}: any) => (
            <CardItem item={item} iconType={'right'} />
          )}
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
    fontFamily: FONTS.mulishSemiBold,
  },
  headerText: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishRegular,
  },
  statsContainer: {
    marginTop: 37,
    marginLeft: 25,
  },
  statTitle: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishSemiBold,
    fontSize: 18,
  },
  statTitle2: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishLight,
    fontSize: 18,
  },
});
