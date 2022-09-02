import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Header from '../../components/Header';
import {getHeight, setHeight} from '../../utils/Dimension';
import {COLORS, FONTS} from '../../constants';
import MyCalendar from '../../components/MyCalendar';
import Tab from '../../components/Tab';
import {
  FoodData,
  ProcessFoogMenuMainTabs,
  ProcessFoogMenuSecondTabs,
} from '../../data/data';
import CardItem from '../../components/CardItem';

const ProcessFoodMenuList = (props: any) => {
  const [modalShow, setModalShow] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [secondActiveTab, setSecondActiveTab] = useState();

  const onDayPress = (day: any) => {
    setModalShow(false);
  };

  const onMainTabPress = (index: any) => {
    setActiveTab(index);
  };
  const onSecondTabPress = (index: any) => {
    setSecondActiveTab(index);
  };

  const onItemPress = () => {
    props.navigation.navigate('ProcessFoodMenuDetail');
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'back'}
        title={'Хоолны цэс боловсруулах'}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <Tab
          items={ProcessFoogMenuMainTabs}
          containerStyle={styles.mainTab}
          active={activeTab}
          textStyle={{fontFamily: FONTS.mulishSemiBold}}
          onPress={onMainTabPress}
        />
        <Tab
          items={ProcessFoogMenuSecondTabs}
          containerStyle={styles.secondTab}
          active={secondActiveTab}
          textStyle={{fontFamily: FONTS.mulishSemiBold, fontSize: 15}}
          onPress={onSecondTabPress}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTextTitle}>
            ИЖ БҮРДЭЛ: &nbsp;&nbsp;&nbsp;
          </Text>
          <Text style={styles.headerText}>4 дүгээр сарын 18-ны өдөр</Text>
        </View>
        <FlatList
          numColumns={2}
          style={{marginTop: 30}}
          data={FoodData}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => (
            <CardItem
              item={item}
              iconType="right"
              iconColor={COLORS.DEFAULT_COLOR}
              onItemPress={onItemPress}
            />
          )}
        />
        <Modal visible={modalShow} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => setModalShow(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <MyCalendar onDayPress={onDayPress} />
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={styles.clearButton}>
                    <Text style={styles.clearButtonText}>Цэвэрлэх</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.chooseButton}>
                    <Text style={styles.chooseButtonText}>Сонгох</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default ProcessFoodMenuList;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
  },

  mainTab: {
    height: 26,
  },
  secondTab: {
    height: 40,
    marginTop: 17,
  },

  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // flex: 1,
    height: setHeight(75),
    marginTop: setHeight(10),
  },
  modal: {
    height: '60%',
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
    alignItems: 'center',
  },
  clearButton: {
    height: 34,
    borderWidth: 1,
    borderColor: '#858C94',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
  },
  clearButtonText: {
    color: '#858C94',
    fontWeight: 'bold',
    fontFamily: FONTS.mulishBlack,
  },
  chooseButton: {
    height: 34,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    backgroundColor: COLORS.DEFAULT_COLOR,
  },
  chooseButtonText: {
    color: COLORS.textColor,
    fontWeight: 'bold',
    fontFamily: FONTS.mulishBlack,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  headerTextTitle: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishSemiBold,
  },
  headerText: {
    color: COLORS.textColor,
    fontFamily: FONTS.mulishRegular,
  },
});
