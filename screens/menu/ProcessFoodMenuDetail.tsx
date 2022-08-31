import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardCounterButtonItem from '../../components/CardCounterButtonItem';
import CardItem from '../../components/CardItem';
import CounterButton from '../../components/CounterButton';
import Header from '../../components/Header';
import Tab from '../../components/Tab';
import {COLORS, FONTS} from '../../constants';
import {
  FoodData,
  ProcessFoodMenuDetailTabs,
  ReceiptData,
} from '../../data/data';
import {getHeight, getWidth, setWidth} from '../../utils/Dimension';
import {showDialogMessage, showSuccessMessage} from '../../utils/helper';

const ProcessFoodMenuDetail = (props: any) => {
  const [modalShow, setModalShow] = useState(true);
  const [activeTab, setActiveTab] = useState();

  const onDayPress = (day: any) => {
    setModalShow(false);
  };

  const onMainTabPress = (index: any) => {
    setActiveTab(index);
  };

  const onSave = () => {
    // showDialogMessage('Та үүсгэхдээ итгэлтэй байна уу?', () =>
    showSuccessMessage('Амжилттай илгээгдлээ.');
    // );
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
          items={ProcessFoodMenuDetailTabs}
          containerStyle={styles.secondTab}
          active={activeTab}
          onPress={onMainTabPress}
        />

        <View style={styles.headerTextContainer}>
          <View style={styles.headerInfoItem}>
            <Icon name="burn" style={styles.icon} />
            <Text style={styles.headerTextTitle}>60 ккал</Text>
          </View>
          <View style={styles.headerInfo2}>
            <Text style={styles.icon}>₮</Text>
            <Text style={styles.headerTextTitle}>3,500</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.childContainer}>
            <Image
              source={require('../../assets/images/child.png')}
              style={styles.child}
            />
            <Text style={styles.childText}> Хүүхдийн тоо</Text>
          </View>
          <View style={{marginRight: setWidth(12)}}>
            <CounterButton />
          </View>
        </View>
        {activeTab == 1 ? (
          <View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.foodName}>ХООЛНЫ НЭР :</Text>
              <Text style={styles.textValue}>Тефтель</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.textValue}>1 </Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Үхрийн махыг 2-3 удаа машиндана.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.textValue}>2</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Цагаан будааг 2-3 удаа усаар угааж зайлна.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.textValue}>3</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Бөөрөнхий сонгиныг угааж, цэвэрлэн жижиг хярж хэрчинэ. Талхны
                хатаамалыг усанд дэвтээнэ.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.textValue}>4</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Машиндсан үхрийн махан дээр агшаасан будаа, хярж хэрчсэн
                бөөрөнхий сонгино, дэвтээсэн талх болон давсыг нэмж амтласан
                махны шанзыг бэлтгэнэ.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.textValue}>5</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Махан шанзнаас 40 гр таслан авч, бөөрөнхий хэлбэрт оруулан
                тосолсон тэвшинд эгнүүлэн тавьж 170-180С-ын хэмд шарах шүүгээнд
                15-20 минут шарна.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <Text style={styles.textValue}>6</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Бэлэн болсон тефтелийг таваглан сүмсээр амтлан 2 төрлийн
                хачиртайгаар 1 хүүхдэд 2 ш тооцон олгоно.
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <FlatList
              numColumns={3}
              style={{marginTop: 30}}
              data={ReceiptData}
              keyExtractor={({item, index}: any) => index}
              renderItem={({item}: any) => (
                <CardCounterButtonItem
                  item={item}
                  iconColor={COLORS.DEFAULT_COLOR}
                />
              )}
            />

            <View style={styles.createCard}>
              <TouchableOpacity style={styles.addButtonContainer}>
                <Icon name="plus" style={styles.addIcon} />
              </TouchableOpacity>
              <Text style={styles.createCardText}>Шаардах хуудас үүсгэх</Text>
              <MaterialCommunityIcons
                name="checkbox-multiple-marked-outline"
                style={styles.createCardIcon}
              />
            </View>
            <View style={styles.headerTextContainer}>
              <View style={styles.headerInfoItem2}>
                <Text style={styles.headerTextTitle2}>Тэмдэглэл</Text>
              </View>
            </View>

            <LinearGradient
              colors={['#F15A2450', '#FFBD0850']}
              style={{marginTop: 20, borderRadius: 6}}>
              <TextInput
                style={styles.note}
                placeholder="Энд тэмдэглэл бичнэ үү."
              />
            </LinearGradient>
            <TouchableOpacity
              style={[styles.createCard, {marginBottom: 20}]}
              onPress={onSave}>
              <Text style={styles.createCardText}>Тэмдэглэл бичих</Text>
              <MaterialCommunityIcons
                name="note-outline"
                style={styles.createCardIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ProcessFoodMenuDetail;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  secondTab: {
    height: 40,
    marginTop: 17,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 20,
    // paddingVertical: 10,
    height: 60,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: COLORS.DEFAULT_COLOR,
    paddingHorizontal: 25,
    width: getWidth(),
    marginLeft: -20,
  },
  headerTextTitle: {
    color: COLORS.textColor,
    fontFamily: FONTS.regular,
    fontSize: 15,
    marginLeft: 20,
  },
  headerTextTitle2: {
    color: COLORS.textColor + '70',
    fontFamily: FONTS.regular,
    fontSize: 15,
  },
  headerText: {
    color: COLORS.textColor,
    fontFamily: FONTS.regular,
  },
  headerInfoItem: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.DEFAULT_COLOR,
    alignItems: 'center',
  },
  headerInfoItem2: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerInfo2: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 24,
  },
  childContainer: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_COLOR,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
  },
  child: {
    height: 24,
    width: 24,
  },
  childText: {
    fontSize: 15,
    color: COLORS.textColor,
    fontFamily: FONTS.regular,
  },
  createCard: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.DEFAULT_COLOR,
    height: 41,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 36,
  },
  createCardText: {
    color: COLORS.textColor,
    fontSize: 24,
    fontFamily: FONTS.regular,
    width: '70%',
    textAlign: 'center',
  },
  createCardIcon: {
    fontSize: 20,
    color: COLORS.DEFAULT_COLOR,
  },
  addButtonContainer: {
    position: 'absolute',
    height: 50,
    width: 50,
    borderWidth: 4,
    borderRadius: 50,
    borderColor: '#fff',
    backgroundColor: COLORS.DEFAULT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: -35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  addIcon: {
    color: '#fff',
    fontSize: 24,
  },
  note: {
    height: 100,
    padding: 10,
    borderRadius: 6,
    textAlignVertical: 'top',
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
});
