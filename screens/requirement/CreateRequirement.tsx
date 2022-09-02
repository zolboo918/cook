import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CounterButton from '../../components/CounterButton';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Tab from '../../components/Tab';
import {COLORS, FONTS} from '../../constants';
import {CreateRequireMentData, ProcessFoogMenuMainTabs} from '../../data/data';
import {getHeight, setHeight, setWidth} from '../../utils/Dimension';
import {SwipeListView} from 'react-native-swipe-list-view';
import {showDialogMessage, showSuccessMessage} from '../../utils/helper';
import {CustomAlert} from '../../utils/CustomAlert';

const CreateRequirement = (props: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const item = props.route.params?.item;
  const title = props.route.params?.title;
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
        title={title ? title : 'Шаардах хуудас үүсгэх'}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        {item ? (
          <View style={styles.stateContainer}>
            <Text style={styles.stateLabel}>Төлөв</Text>
            <TouchableOpacity
              style={[
                styles.state,
                {borderWidth: 1, borderColor: item?.color},
              ]}>
              <Icon
                name={item?.iconName}
                style={[styles.icon, {color: item?.color}]}
              />
              <Text style={[styles.rest, {color: item?.color}]}>
                {item?.state}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Tab
            items={ProcessFoogMenuMainTabs}
            containerStyle={styles.mainTab}
            active={activeTab}
            onPress={onMainTabPress}
          />
        )}
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
      </View>
      <SwipeListView
        nestedScrollEnabled
        rightOpenValue={-75}
        ListHeaderComponent={() => (
          <View style={styles.listHeaderContainer}>
            <Text style={styles.listHeaderTitle}>Бараа материалын нэр</Text>
            <Text style={styles.listHeaderTitle}>Тоо хэмжээ</Text>
            <Text style={styles.listHeaderTitle}>Агуулахын үлдэгдэл</Text>
          </View>
        )}
        style={{marginTop: 20}}
        data={CreateRequireMentData}
        renderItem={({item}: any) => <ProductList item={item} />}
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Илгээх</Text>
        <Icon name="send-outline" style={styles.buttonIcon2} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateRequirement;

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
    borderColor: COLORS.DEFAULT_COLOR,
  },
  listHeaderTitle: {
    width: '33%',
    textAlign: 'center',
    color: '#04085680',
    fontSize: 15,
  },
  button: {
    width: '90%',
    height: 41,
    marginVertical: 20,
    borderRadius: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: COLORS.DEFAULT_COLOR,
  },
  buttonText: {
    fontSize: 24,
    color: COLORS.textColor,
  },
  buttonIcon: {
    color: '#fff',
    fontSize: 26,
    marginLeft: 12,
  },
  buttonIcon2: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 26,
    marginLeft: 12,
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
});
