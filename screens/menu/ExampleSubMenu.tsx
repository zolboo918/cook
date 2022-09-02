import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {COLORS, FONTS} from '../../constants';
import {ExampleSubMenuData} from '../../data/data';
import {getHeight, getWidth} from '../../utils/Dimension';

const ExampleSubMenu = (props: any) => {
  const {item} = props.route.params;
  const onItemPress = (item: any) => {
    props.navigation.navigate('SavedReceiptDetail', {
      item: {
        picture: require('../../assets/images/shul.png'),
        type: 'Миний хадгалсан',
        name: 'Зууш',
      },
      title: 'Жишиг цэс',
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'back'}
        title={item.name}
        titleStyle={{fontWeight: 'bold', fontSize: 24, marginTop: '5%'}}
        leftIconPress={props.navigation.goBack}
        rightIconShow={false}
      />
      <View style={styles.wrapper}>
        <View>
          <TextInput placeholder="Хайх" style={styles.searchInput} />
          <Icon name="search" style={styles.searchIcon} />
        </View>

        <View style={styles.line}></View>
        <FlatList
          numColumns={1}
          style={{marginTop: 10}}
          data={ExampleSubMenuData}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => (
            <TouchableOpacity
              onPress={() => onItemPress(item)}
              style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Icon name="ios-arrow-up" style={styles.itemIcon} />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default ExampleSubMenu;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  searchInput: {
    borderWidth: 0.2,
    borderColor: COLORS.DEFAULT_COLOR,
    backgroundColor: '#858C9410',
    padding: 10,
    fontFamily: FONTS.regular,
    borderRadius: 6,
  },
  searchIcon: {
    position: 'absolute',
    color: COLORS.DEFAULT_COLOR,
    fontSize: 20,
    right: 12,
    top: '30%',
  },
  line: {
    height: 1,
    marginTop: 24,
    width: getWidth(),
    marginLeft: -20,
    backgroundColor: COLORS.DEFAULT_COLOR,
  },
  itemContainer: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.DEFAULT_COLOR,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 6,
    paddingVertical: 5,
  },
  itemImage: {
    height: 75,
    width: 75,
  },
  itemText: {
    fontSize: 15,
    fontFamily: FONTS.mulishSemiBold,
    color: COLORS.textColor,
  },
  itemIcon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 28,
    marginRight: 20,
    transform: [{rotateX: '45deg'}, {rotateZ: '-45deg'}],
  },
});
