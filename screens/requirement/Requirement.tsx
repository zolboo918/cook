import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tab from '../../components/Tab';
import Header from '../../components/Header';
import {getHeight} from '../../utils/Dimension';
import {MenuListData} from '../../data/data';
import MenuListItem from '../../components/MenuListItem';

const Requirement = (props: any) => {
  const press1 = () => {
    props.navigation.navigate('CreateRequirement');
  };
  const press2 = () => {
    props.navigation.navigate('MyRequirement');
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'menu'}
        title={'Шаардах хуудас'}
        rightIconShow={true}
        titleStyle={{fontWeight: 'bold', fontSize: 24, marginTop: '5%'}}
        leftIconPress={props.navigation.goBack}
      />
      <View style={styles.wrapper}>
        <MenuListItem
          rightIcon={'book'}
          name={'Шаардах хуудас үүсгэх'}
          onPress={press1}
        />
        <MenuListItem
          rightIcon={'pushpino'}
          name={'Миний үүсгэсэн шаардах хуудас'}
          onPress={press2}
        />
      </View>
    </View>
  );
};

export default Requirement;

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
