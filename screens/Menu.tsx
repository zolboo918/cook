import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tab from '../components/Tab';
import Header from '../components/Header';
import {getHeight} from '../utils/Dimension';
import {MenuListData} from '../data/data';
import MenuListItem from '../components/MenuListItem';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Header title={'Хоолны цэс боловсруулах'} />
      <View style={styles.wrapper}>
        <FlatList
          data={MenuListData}
          renderItem={({item}: any) => <MenuListItem item={item} />}
        />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: getHeight(),
    backgroundColor: '#fff',
  },
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
});
