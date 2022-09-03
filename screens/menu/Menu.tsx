import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tab from '../../components/Tab';
import Header from '../../components/Header';
import {getHeight} from '../../utils/Dimension';
import {MenuListData} from '../../data/data';
import MenuListItem from '../../components/MenuListItem';

const Menu = (props: any) => {
  const press1 = () => {
    props.navigation.navigate('ProcessFoodMenu');
  };
  const press2 = () => {
    props.navigation.navigate('SavedReceipt');
  };
  const press3 = () => {
    props.navigation.navigate('ExampleMenu');
  };
  return (
    <View style={styles.container}>
      <Header title={'Хоолны цэс боловсруулах'} />
      <View style={styles.wrapper}>
        <MenuListItem
          leftIcon={'book'}
          name={'Хоолны цэс боловсруулах'}
          onPress={press1}
          shadow={true}
        />
        <MenuListItem
          leftIcon={'pushpino'}
          name={'Миний хадгалсан жор'}
          onPress={press2}
        />
        <MenuListItem leftIcon={'copy1'} name={'Жишиг цэс'} onPress={press3} />
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
    marginTop: 30,
    paddingHorizontal: 30,
  },
});
