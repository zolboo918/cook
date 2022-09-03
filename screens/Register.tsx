import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Tab from '../components/Tab';
import {COLORS, FONTS} from '../constants';
import {RegisterFoodData, RegisterTab} from '../data/data';

const Register = (props: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const onMainTabPress = (index: any) => {
    setActiveTab(index);
  };

  const closeRow = (rowMap: any, rowKey: any) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  return (
    <ScrollView style={styles.container} nestedScrollEnabled>
      <Header
        leftIcon={'back'}
        title={'Бүртгэл'}
        titleStyle={{marginTop: 10}}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <Tab
          items={RegisterTab}
          containerStyle={styles.mainTab}
          active={activeTab}
          onPress={onMainTabPress}
        />
      </View>
      <SwipeListView
        nestedScrollEnabled
        rightOpenValue={-75}
        ListHeaderComponent={() => (
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderTitle}>Огноо</Text>
            <Text style={styles.listHeaderTitle}>Хоолны нэр</Text>
            <Text style={styles.listHeaderTitle}>Хоолны хэм</Text>
          </View>
        )}
        style={{marginTop: 20}}
        data={RegisterFoodData}
        renderItem={({item}: any) => (
          <ProductList
            item={item}
            colStyle={{width: '55%'}}
            containerStyle={{borderBottomWidth: 0, height: 130}}
          />
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Илгээх</Text>
        <Icon name="send-outline" style={styles.buttonIcon2} />
      </TouchableOpacity>

      <View style={styles.listHeaderContainer}>
        <Text style={styles.listHeaderTitle2}>Баталгаажуулах зураг</Text>
      </View>

      <LinearGradient
        start={{x: 0.0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#38B67370', '#34A1B570']}
        style={{marginTop: 20, borderRadius: 6, marginHorizontal: 20}}>
        <View style={styles.note}>
          <Text
            style={{color: COLORS.textColor, fontFamily: FONTS.mulishRegular}}>
            Өнөөдрийн хоолны зураг энд байршина.
          </Text>
        </View>
      </LinearGradient>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>Зураг оруулах</Text>
        <Icon name="plus-circle-outline" style={styles.buttonIcon3} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
  },

  mainTab: {
    height: 31,
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
    fontFamily: FONTS.mulishRegular,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    padding: 10,
    paddingVertical: 20,
    borderColor: COLORS.DEFAULT_COLOR,
  },
  listHeaderTitle: {
    width: '33%',
    textAlign: 'center',
    color: '#04085680',
    fontSize: 15,
  },
  listHeaderTitle2: {
    width: '100%',
    // textAlign: 'center',
    marginLeft: 20,
    color: '#04085680',
    fontSize: 15,
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
    borderWidth: 0.5,
    borderColor: COLORS.DEFAULT_COLOR,
  },
  buttonText: {
    fontSize: 24,
    color: COLORS.textColor,
    marginLeft: '40%',
  },
  buttonText2: {
    fontSize: 24,
    color: COLORS.textColor,
    marginLeft: '30%',
  },
  buttonIcon: {
    color: '#fff',
    fontSize: 26,
    marginLeft: '40%',
  },
  buttonIcon2: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 26,
    marginLeft: '25%',
  },
  buttonIcon3: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 26,
    marginLeft: '15%',
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
  icon: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
  },
  rest: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 25,
  },
  stateContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  state: {
    width: '50%',
    alignItems: 'center',
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
  },
  stateLabel: {
    fontSize: 13,
    color: COLORS.textColor + '80',
  },
  note: {
    height: 100,
    padding: 10,
    borderRadius: 6,
    fontFamily: FONTS.mulishRegular,
    textAlignVertical: 'top',
  },
});
