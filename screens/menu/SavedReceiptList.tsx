import React from 'react';
import {FlatList, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';
import {COLORS, FONTS} from '../../constants';
import {SavedReceiptListData} from '../../data/data';
import {getHeight, getWidth} from '../../utils/Dimension';

const SavedReceiptList = (props: any) => {
  const onItemPress = (item: any) => {
    props.navigation.navigate('SavedReceiptDetail', {item});
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'back'}
        title={'Миний хадгалсан цэс'}
        titleStyle={{fontWeight: 'bold', fontSize: 24}}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <View>
          <TextInput placeholder="Хайх" style={styles.searchInput} />
          <Icon name="search" style={styles.searchIcon} />
        </View>

        <View style={styles.line}></View>

        <FlatList
          numColumns={2}
          style={{marginTop: 30}}
          data={SavedReceiptListData}
          keyExtractor={({item, index}: any) => index}
          renderItem={({item}: any) => (
            <CardItem
              item={item}
              iconColor={COLORS.DEFAULT_COLOR}
              onItemPress={() => onItemPress(item)}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default SavedReceiptList;

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
    borderWidth: 0.3,
    borderColor: COLORS.DEFAULT_COLOR,
    backgroundColor: '#858C9410',
    padding: 10,
    fontFamily: FONTS.mulishLight,
    borderRadius: 6,
    height: 40,
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
});
