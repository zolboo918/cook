import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import RadioListItem from '../../components/RadioListItem';
import Tab from '../../components/Tab';
import {COLORS, FONTS} from '../../constants';
import {ProcessFoogMenuMainTabs, ReceiveHealthFoodData} from '../../data/data';
import {getHeight} from '../../utils/Dimension';
import {showDialogMessage} from '../../utils/helper';

const ReceiveFoodMaterial = (props: any) => {
  const [activeTab, setActiveTab] = useState();
  const onPressSend = () => {
    showDialogMessage('Та илгээхдээ итгэлтэй байна уу?', () => {});
  };
  const onMainTabPress = (index: any) => {
    setActiveTab(index);
  };
  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'back'}
        title={'1. Хүнсний түүхий эд  хүлээн авах'}
        titleStyle={{fontSize: 22}}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <Tab
          items={ProcessFoogMenuMainTabs}
          containerStyle={styles.mainTab}
          active={activeTab}
          onPress={onMainTabPress}
        />
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={styles.foodName}>ОГНОО :</Text>
          <Text style={styles.textValue}> 2022.03.22</Text>
        </TouchableOpacity>
        <FlatList
          nestedScrollEnabled
          ListHeaderComponent={() => (
            <View>
              <View style={styles.listHeaderContainer}>
                <Text style={styles.listHeaderTitle}>
                  Түүхий эдийн жагсаалт
                </Text>
                <View style={{width: '100%', alignSelf: 'center'}}>
                  <Text style={styles.listHeaderTitle}>Мэдрэхүйн үзүүлэлт</Text>
                  <Text style={styles.listHeaderSubTitle}>
                    өнгө, үнэр, амт, хэлбэр
                  </Text>
                </View>
              </View>
              <View style={styles.headerSubtitlesContainer}>
                <Text style={styles.headerSubTitle}>Дуусах хугацаа</Text>
                <Text style={styles.headerSubTitle}>Хэвийн</Text>
                <Text style={styles.headerSubTitle}>Хэвийн бус</Text>
              </View>
            </View>
          )}
          style={{marginTop: 20}}
          data={ReceiveHealthFoodData}
          renderItem={({item}: any) => <RadioListItem item={item} />}
        />
        <TouchableOpacity style={styles.registerButton} onPress={onPressSend}>
          <Text style={styles.buttonText}>Илгээх</Text>
          <Icon name="send-outline" style={styles.registerButtonIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReceiveFoodMaterial;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  mainTab: {
    height: 26,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // flex: 1,
    height: getHeight(),
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
  listHeaderSubTitle: {
    width: '50%',
    textAlign: 'center',
    color: '#04085680',
    fontSize: 12,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    padding: 10,
    borderColor: COLORS.DEFAULT_COLOR,
    marginBottom: 10,
  },
  headerSubtitlesContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '70%',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: COLORS.DEFAULT_COLOR,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 25,
  },
  headerSubTitle: {
    color: '#090F87',
    fontFamily: FONTS.mulishRegular,
    fontSize: 11,
  },
  backRightBtnLeft: {
    right: 0,
  },
  buttonIcon: {
    color: '#fff',
    fontSize: 26,
  },
  buttonText: {
    width: '90%',
    textAlign: 'center',
    color: COLORS.textColor,
    fontSize: 26,
  },
  registerButton: {
    width: '100%',
    height: 40,
    borderRadius: 6,
    borderColor: COLORS.DEFAULT_COLOR,
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonIcon: {
    width: '10%',
    textAlign: 'center',
    color: COLORS.DEFAULT_COLOR,
    fontSize: 26,
  },
});
