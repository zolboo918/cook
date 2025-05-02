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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {COLORS, FONTS} from '../../constants';
import {CategoryData} from '../../data/data';
import {getHeight, getWidth, setHeight, setWidth} from '../../utils/Dimension';

const ExampleMenuList = (props: any) => {
  const onItemPress = (item: any) => {
    props.navigation.navigate('ExampleSubMenu', {item});
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'back'}
        title={'Жишиг цэс'}
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
        <Text style={styles.title}>Ангилал</Text>
        <FlatList
          numColumns={2}
          style={{marginTop: 10}}
          data={CategoryData}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => (
            <TouchableOpacity onPress={() => onItemPress(item)}>
              <LinearGradient
                colors={['#F15A2415', '#FFBD0815']}
                style={styles.itemContainer}>
                <Image
                  source={item.image}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <Text style={styles.itemText}>{item.name}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default ExampleMenuList;

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
    height: 40,
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
  title: {
    fontSize: 15,
    fontFamily: FONTS.mulishSemiBold,
    color: COLORS.textColor,
    marginTop: 10,
  },
  itemContainer: {
    height: setHeight(14),
    width: setWidth(46),
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 6,
  },
  itemImage: {
    height: 75,
    width: 75,
  },
  itemText: {
    fontSize: 15,
    fontFamily: FONTS.mulishRegular,
    color: COLORS.textColor,
  },
});
