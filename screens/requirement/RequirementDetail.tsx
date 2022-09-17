import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import RequirementDetailListItem from '../../components/RequirementDetailListItem';
import {COLORS, FONTS} from '../../constants';
import {
  RequirementDetailData,
  RequirementDetailPopUpData1,
  RequirementDetailPopUpData2,
} from '../../data/data';
import {setHeight} from '../../utils/Dimension';

const RequirementDetail = (props: any) => {
  const item = props.route.params.item;
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState(1);

  const onListButtonPress = (item: any) => {
    if (item.status == 'Хянасан') {
      setModalShow(true);
      setModalType(1);
    } else {
      setModalShow(true);
      setModalType(2);
    }
  };

  const renderItem1 = (item: any) => {
    return (
      <View style={styles.listItemContainer}>
        <View>
          <Image
            source={item.image}
            style={styles.listImage}
            resizeMode="contain"
          />
          <Text style={styles.listItemName}>{item.productName}</Text>
          <Text style={styles.listItemQty}>{item.qty}</Text>
        </View>
        <Icon
          name={
            item.accepted ? 'checkmark-circle-outline' : 'close-circle-outline'
          }
          style={item.accepted ? styles.iconAccept : styles.iconNotAccept}
        />
      </View>
    );
  };

  const renderItem2 = (item: any) => {
    return (
      <View style={styles.listItemContainer}>
        <View>
          <Image
            source={item.image}
            style={styles.listImage}
            resizeMode="contain"
          />
          <Text style={styles.listItemName}>{item.productName}</Text>
          <Text style={styles.listItemQty}>{item.qty}</Text>
        </View>
        <Text style={styles.bigQty}>{item.qty}</Text>
      </View>
    );
  };

  const renderListHeader1 = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Түүхий эдийн жагсаалт</Text>
        <View>
          <Text style={styles.title1}>Мэдрэхүйн үзүүлэлт</Text>
          <Text style={styles.title2}>Шаардлага хангасан эсэх</Text>
        </View>
      </View>
    );
  };
  const renderListHeader2 = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={[styles.title1, {width: '35%'}]}>
          Бараа материалын нэр
        </Text>
        <View>
          <Text style={[styles.title1, {width: '60%'}]}>Олгосон хэмжээ</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={'back'}
        leftIconPress={() => props.navigation.goBack()}
        title={'Шаардах хуудас дэлгэрэнгүй'}
        titleStyle={{fontSize: 23, marginTop: '5%'}}
      />
      <FlatList
        nestedScrollEnabled
        ListHeaderComponent={() => (
          <View style={styles.listHeaderContainer}>
            <View>
              <Text style={styles.listHeaderTitle}>{item.title}</Text>
              <View style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={styles.listHeaderText}>{item.grade} </Text>
                <Text style={styles.listHeaderText}>1-р хоол </Text>
                <Image
                  source={require('../../assets/images/ccalIcon.png')}
                  style={{marginLeft: 5}}
                />
                <Text style={styles.listHeaderText}> 506.2</Text>
              </View>
            </View>
            <View style={styles.listHeaderRightSection}>
              <Text style={[styles.listHeaderTitle2]}>3000</Text>
              <Text style={[styles.listHeaderTitle2]}>хоолны тоо</Text>
            </View>
          </View>
        )}
        style={{marginTop: 20}}
        data={RequirementDetailData}
        renderItem={({item}: any) => (
          <RequirementDetailListItem item={item} onPress={onListButtonPress} />
        )}
      />
      <Modal visible={modalShow} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeContainer}
            onPress={() => setModalShow(false)}>
            <Icon name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.modal}>
            {modalType == 1 ? (
              <FlatList
                data={RequirementDetailPopUpData1}
                style={{flex: 1}}
                ListHeaderComponent={renderListHeader1}
                renderItem={({item}: any) => renderItem1(item)}
              />
            ) : (
              <FlatList
                data={RequirementDetailPopUpData2}
                style={{flex: 1}}
                ListHeaderComponent={renderListHeader2}
                renderItem={({item}: any) => renderItem2(item)}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RequirementDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F7',
  },
  listHeaderContainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  listHeaderRightSection: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderTitle: {
    color: COLORS.textColor,
    fontSize: 24,
    fontWeight: 'bold',
  },
  listHeaderTitle2: {
    color: COLORS.textColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
  listHeaderText: {
    fontSize: 10,
    color: COLORS.textColor,
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // flex: 1,
    height: setHeight(78),
    marginTop: setHeight(10),
  },
  modal: {
    height: '80%',
    width: '85%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: 10,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.DEFAULT_COLOR,
    paddingBottom: 10,
  },
  title1: {
    fontSize: 15,
    color: COLORS.textColor,
    textAlign: 'center',
  },
  title2: {
    fontSize: 12,
    color: COLORS.textColor,
    fontFamily: FONTS.comissionerItalic,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#858C9450',
    paddingVertical: 3,
  },
  listImage: {
    height: 40,
    width: 100,
  },
  listItemName: {
    color: COLORS.textColor,
    fontSize: 15,
    textAlign: 'center',
  },
  listItemQty: {
    color: COLORS.textColor + '80',
    fontSize: 15,
    textAlign: 'center',
  },
  iconAccept: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 40,
    marginRight: 40,
  },
  iconNotAccept: {
    fontSize: 40,
    color: '#ff0000',
    marginRight: 40,
  },
  closeContainer: {
    position: 'absolute',
    height: 31,
    width: 31,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    right: '8%',
    top: '3%',
  },
  closeIcon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 30,
  },
  bigQty: {
    color: COLORS.textColor + '80',
    fontSize: 24,
    textAlign: 'center',
    marginRight: '18%',
  },
});
