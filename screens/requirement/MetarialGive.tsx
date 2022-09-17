import React from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';
import {COLORS, FONTS} from '../../constants';
import {RequireMentGiveData} from '../../data/data';
import {showSuccessMessage} from '../../utils/helper';

const MetarialGive = (props: any) => {
  const item = props.route.params.item;

  const send = () => {
    showSuccessMessage('Амжилттай олголоо.');
  };

  return (
    <ScrollView style={{backgroundColor: '#F8F8F7'}}>
      <View style={styles.container}>
        <Header
          leftIcon={'back'}
          leftIconPress={() => props.navigation.goBack()}
          title={'Материал олгох '}
          titleStyle={{fontSize: 23, marginTop: '5%'}}
        />

        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{item.title}</Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.headerText}>{item.grade} </Text>
            <Text style={styles.headerText}>1-р хоол </Text>
            <Image
              source={require('../../assets/images/ccalIcon.png')}
              style={{marginLeft: 5}}
            />
            <Text style={styles.headerText}> 506.2</Text>
          </View>
        </View>

        <View style={styles.wrapper}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.top, {alignItems: 'flex-start'}]}>
              <Text style={styles.text}>
                {item.status != 'Шаардлага хангаагүй' && item.status + ' '}огноо
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name="calendar" style={styles.calendarIcon} />
                <Text style={styles.textValue}>{item.date}</Text>
              </View>
            </View>
            <View style={styles.top}>
              <Text style={styles.text}>Илгээсэн ажилтан</Text>
              <Text style={styles.textValue}>БУРМАА</Text>
            </View>
          </View>
          <Text style={styles.textValue}>Тэмдэглэл: </Text>
          <Text style={styles.text}>
            Олгох бүтээгдэхүүний хугацааг сайн шалгаж өгнө үү
          </Text>
          <Text style={styles.textValue}>Шаардсан хэмжээ </Text>
          <View style={styles.sizeContainer}>
            <View>
              <View style={styles.sizeItem}>
                <Text style={styles.sizeLabel}>Төлөвлөсөн :</Text>
                <Text style={styles.sizeValue}>1500</Text>
              </View>
              <View style={styles.sizeItem}>
                <Text style={styles.sizeLabel}>Өглөөний ирц:</Text>
                <Text style={styles.sizeValue}>1250</Text>
              </View>
              <View style={styles.sizeItem}>
                <Text style={styles.sizeLabel}>Онлайн захиалга:</Text>
                <Text style={styles.sizeValue}>200</Text>
              </View>
            </View>
            <View style={{marginLeft: '25%'}}>
              <Text style={styles.sizeTitle}>ШААРДСАН НЬ</Text>
              <View style={styles.yellowBox}>
                <Text style={styles.yellowBoxText}>1500 ш</Text>
              </View>
            </View>
          </View>
        </View>
        <FlatList
          style={{marginTop: 30}}
          data={RequireMentGiveData}
          ListHeaderComponent={() => (
            <View style={styles.listHeaderContainer}>
              <Text style={styles.listHeaderTitle}>Бараа материалын нэр</Text>
              <Text style={styles.listHeaderTitle2}>Хүссэн хэмжээ</Text>
              <Text style={styles.listHeaderTitle}>Агуулахын үлдэгдэл</Text>
            </View>
          )}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => (
            <View style={{flexDirection: 'row'}}>
              <View style={styles.listCol1}>
                <Image
                  source={item.image}
                  style={{height: 56, width: 87}}
                  resizeMode="contain"
                />
                <Text style={styles.col1Text}>{item.name}</Text>
              </View>
              <Text style={styles.col2}>{item.wantedSize}</Text>
              <Text style={styles.col2}>{item.containerSize}</Text>
            </View>
          )}
        />
        <View>
          <TextInput
            placeholder="Энд тэмдэглэл бичнэ үү."
            placeholderTextColor="#090f87670"
            style={styles.note}
          />
          <MaterialCommunityIcons
            name="note-edit-outline"
            style={styles.noteIcon}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={send}>
        <Text style={styles.buttonText}>ОЛГОХ</Text>
        <Icon name="send-outline" style={styles.buttonIcon2} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MetarialGive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F7',
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 30,
    marginTop: 25,
  },
  headerContainer: {
    paddingLeft: 30,
    marginTop: 10,
    paddingBottom: 18,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.DEFAULT_COLOR,
  },
  headerTitle: {
    color: COLORS.textColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle2: {
    color: COLORS.textColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerText: {
    fontSize: 10,
    color: COLORS.textColor,
  },
  top: {
    alignItems: 'center',
  },
  calendarIcon: {
    fontSize: 18,
    color: COLORS.DEFAULT_COLOR,
    marginRight: 2,
    marginTop: 10,
  },
  text: {
    color: COLORS.textColor,
    fontSize: 15,
  },
  textValue: {
    color: COLORS.textColor,
    fontSize: 15,
    marginTop: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 10,
    shadowColor: COLORS.DEFAULT_COLOR,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  sizeItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeLabel: {
    color: COLORS.textColor + '80',
    fontFamily: FONTS.comissionerItalic,
    fontSize: 12,
  },
  sizeValue: {
    color: COLORS.textColor,
    fontSize: 12,
    marginLeft: 5,
  },
  sizeTitle: {
    color: COLORS.textColor,
    fontSize: 12,
    fontWeight: '600',
  },
  yellowBox: {
    backgroundColor: '#FFCA28',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 5,
    marginTop: 5,
  },
  yellowBoxText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
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
  listHeaderTitle: {
    width: '33%',
    textAlign: 'center',
    color: '#04085680',
    fontFamily: FONTS.mulishRegular,
    fontSize: 15,
  },
  listHeaderTitle2: {
    width: '20%',
    textAlign: 'center',
    color: '#04085680',
    fontSize: 15,
  },
  listCol1: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  col1Text: {
    color: COLORS.textColor,
    fontSize: 15,
    fontFamily: FONTS.mulishRegular,
    textAlign: 'center',
  },
  col2: {
    width: '33%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    color: COLORS.textColor + '80',
  },
  note: {
    height: 88,
    backgroundColor: '#c6e7f440',
    marginTop: 40,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 6,
    textAlignVertical: 'top',
    paddingLeft: 10,
    fontFamily: FONTS.mulishRegular,
    color: '#090f87',
  },
  noteIcon: {
    position: 'absolute',
    color: COLORS.DEFAULT_COLOR,
    right: '10%',
    top: '40%',
    fontSize: 20,
  },
  button: {
    width: '90%',
    height: 41,
    marginVertical: 20,
    borderRadius: 6,
    alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.DEFAULT_COLOR,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    marginLeft: '40%',
  },
  buttonIcon2: {
    color: '#fff',
    fontSize: 26,
    marginLeft: '20%',
  },
});
