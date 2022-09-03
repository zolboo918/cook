import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import CardItemList from '../../components/CardItemList';
import Header from '../../components/Header';
import HeaderImage from '../../components/HeaderImage';
import Tab from '../../components/Tab';
import {COLORS, FONTS} from '../../constants';
import {
  ReceiptData,
  SavedReceiptData,
  SavedReceiptDetailTabs,
} from '../../data/data';
import {getHeight, getWidth, setWidth} from '../../utils/Dimension';
import {showSuccessMessage} from '../../utils/helper';

const SavedReceiptDetail = (props: any) => {
  const {item, title} = props.route.params;
  const [activeTab, setActiveTab] = useState();

  const onMainTabPress = (index: any) => {
    setActiveTab(index);
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderImage
        item={item}
        title={title ? title : 'Миний хадгалсан цэс'}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <Tab
          items={SavedReceiptDetailTabs}
          containerStyle={styles.secondTab}
          textStyle={{fontSize: 15}}
          active={activeTab}
          onPress={onMainTabPress}
        />

        {activeTab == 1 ? (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: COLORS.DEFAULT_COLOR,
                height: 35,
                width: getWidth(),
                marginLeft: -20,
                paddingLeft: 20,
                alignItems: 'center',
              }}>
              <Text style={styles.foodName}>ХООЛНЫ НЭР : </Text>
              <Text style={styles.textValue}>Тефтель</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text style={styles.textValue}>1</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Үхрийн махыг 2-3 удаа машиндана.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text style={styles.textValue}>2</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Цагаан будааг 2-3 удаа усаар угааж зайлна.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text style={styles.textValue}>3</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Бөөрөнхий сонгиныг угааж, цэвэрлэн жижиг хярж хэрчинэ. Талхны
                хатаамалыг усанд дэвтээнэ.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text style={styles.textValue}>4</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Машиндсан үхрийн махан дээр агшаасан будаа, хярж хэрчсэн
                бөөрөнхий сонгино, дэвтээсэн талх болон давсыг нэмж амтласан
                махны шанзыг бэлтгэнэ.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Text style={styles.textValue}>5</Text>
              <Text style={[styles.textValue, {marginLeft: 10}]}>
                Махан шанзнаас 40 гр таслан авч, бөөрөнхий хэлбэрт оруулан
                тосолсон тэвшинд эгнүүлэн тавьж 170-180С-ын хэмд шарах шүүгээнд
                15-20 минут шарна.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 15}}>
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
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 0.2,
                    backgroundColor: COLORS.DEFAULT_COLOR,
                    width: getWidth(),
                  }}></View>
              )}
              style={{marginTop: 30, width: setWidth(110), marginLeft: -20}}
              data={SavedReceiptData}
              keyExtractor={({item, index}: any) => index}
              renderItem={({item, index}: any) => (
                <CardItemList item={item} index={index} />
              )}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SavedReceiptDetail;

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
    height: 40,
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
    color: COLORS.textColor,
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
    height: 70,
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
    fontFamily: FONTS.mulishSemiBold,
    color: COLORS.textColor,
  },
  textValue: {
    fontSize: 15,
    fontFamily: FONTS.mulishRegular,
    color: COLORS.textColor,
  },
});
