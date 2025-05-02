import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {getHeight, setHeight, setWidth} from '../../utils/Dimension';
import {COLORS, FONTS, shadowStyle} from '../../constants';
import {RequirementData} from '../../data/data';
import RequirementListItem from '../../components/RequirementListItem';
import MyCalendar from '../../components/MyCalendar';

const Requirement = (props: any) => {
  const [searchValue, setSearchValue] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const onListItemPress = (item: any) => {
    if (item.status == 'шаардсан') {
      props.navigation.navigate('RequirementMetarialGive', {item});
    } else if (item.status == 'Хянасан') {
      props.navigation.navigate('RequirementDetail', {item});
    } else {
      props.navigation.navigate('RequirementReceiveMaterial', {item});
    }
  };

  const onPressClear = () => {
    setModalShow(false);
  };

  const onPressChoose = () => {
    setModalShow(false);
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={'menu'}
        title={'Шаардах хуудас'}
        rightIconShow={true}
        titleStyle={{fontWeight: 'bold', fontSize: 24, marginTop: '5%'}}
        leftIconPress={props.navigation.goBack}
      />
      <ScrollView style={styles.wrapper}>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchValue}
            placeholder="xайх..."
            style={styles.search}
            onChangeText={setSearchValue}
          />
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="search1" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.text}>2022.03.22</Text>
          <TouchableOpacity
            style={styles.calendarContainer}
            onPress={() => setModalShow(true)}>
            <Icon name="calendar" style={styles.calendarIcon} />
            <Text style={styles.text}>огноо сонгох</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={RequirementData}
          style={styles.list}
          renderItem={({item}: any) => (
            <RequirementListItem
              item={item}
              onPress={() => onListItemPress(item)}
            />
          )}
        />
        <Modal visible={modalShow} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => setModalShow(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modal}>
                <MyCalendar onDayPress={() => {}} />
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={styles.clearButton}
                    onPress={onPressClear}>
                    <Text style={styles.clearButtonText}>Цэвэрлэх</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.chooseButton}
                    onPress={onPressChoose}>
                    <Text style={styles.chooseButtonText}>Сонгох</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Requirement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F7',
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  searchContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 0,
  },
  search: {
    width: setWidth(82),
    alignSelf: 'center',
    borderRadius: 10,
    height: 40,
    backgroundColor: '#FEFDFE',
    paddingLeft: 10,
    color: COLORS.textColor,
  },
  iconContainer: {
    position: 'absolute',
    height: 35,
    width: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#38B67350',
    right: 10,
  },
  icon: {
    color: '#FEFDFE',
    fontSize: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    width: setWidth(80),
    alignSelf: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.textColor,
    fontSize: 13,
    fontFamily: FONTS.mulishRegular,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 18,
    color: COLORS.DEFAULT_COLOR,
    marginRight: 2,
  },
  list: {
    marginTop: 30,
  },

  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // flex: 1,
    height: setHeight(66),
    marginTop: setHeight(22.2),
  },
  modal: {
    height: '70%',
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
    borderRightWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
  },
  clearButtonText: {
    color: '#858C94',
    fontWeight: 'bold',
    fontFamily: FONTS.mulishBlack,
    fontSize: 15,
  },
  chooseButton: {
    ...shadowStyle,
    marginLeft: 0,
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
    fontSize: 15,
    fontFamily: FONTS.mulishBlack,
  },
});
