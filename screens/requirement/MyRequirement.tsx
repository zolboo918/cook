import React, {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import MyCalendar from '../../components/MyCalendar';
import StateListItem from '../../components/StateListItem';
import {COLORS, FONTS} from '../../constants';
import {StateListData} from '../../data/data';
import {getHeight, setHeight} from '../../utils/Dimension';
import {showDialogMessage, showSuccessMessage} from '../../utils/helper';

const MyRequirement = (props: any) => {
  const [modalShow, setModalShow] = useState(true);

  const onDayPress = (day: any) => {
    setModalShow(false);
  };

  const onItemPress = (item: any) => {
    props.navigation.navigate('CreateRequirement', {
      item,
      title: 'Миний үүсгэсэн шаардах хуудас',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'back'}
        title={'Миний үүсгэсэн шаардах хуудас'}
        titleStyle={{fontSize: 22}}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 30}}>
          <Text style={styles.foodName}>ОГНОО :</Text>
          <Text style={styles.textValue}> 2022.03.22</Text>
        </View>
        <SwipeListView
          nestedScrollEnabled
          rightOpenValue={-75}
          ListHeaderComponent={() => (
            <View style={styles.listHeaderContainer}>
              <Text style={styles.listHeaderTitle}>
                Шаардах хуудасны дугаар
              </Text>
              <Text style={styles.listHeaderTitle}>Төлөв</Text>
            </View>
          )}
          style={{marginTop: 20}}
          data={StateListData}
          renderItem={({item}: any) => (
            <StateListItem item={item} onItemPress={onItemPress} />
          )}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtnLeft]}
                onPress={() =>
                  showDialogMessage('Та устгахдаа итгэлтэй байна уу?', () => {
                    showSuccessMessage('Амжилттай устгагдлаа');
                  })
                }>
                <Icon name="trash-can-outline" style={styles.buttonIcon} />
              </TouchableOpacity>
            </View>
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

export default MyRequirement;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
    width: 115,
    borderRightWidth: 0,
  },
  clearButtonText: {
    color: '#858C94',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: FONTS.mulishSemiBold,
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
    fontSize: 15,
    fontFamily: FONTS.mulishSemiBold,
    color: COLORS.textColor,
    fontWeight: 'bold',
  },
  foodName: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: COLORS.textColor,
  },
  textValue: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.textColor,
  },
  listHeaderTitle: {
    width: '50%',
    textAlign: 'center',
    color: '#04085680',
    fontSize: 15,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    padding: 10,
    borderColor: COLORS.DEFAULT_COLOR,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: COLORS.DEFAULT_COLOR,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 25,
  },
  backRightBtnLeft: {
    right: 0,
  },
  buttonIcon: {
    color: '#fff',
    fontSize: 26,
  },
});
