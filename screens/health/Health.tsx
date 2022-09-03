import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tab from '../../components/Tab';
import Header from '../../components/Header';
import {getHeight} from '../../utils/Dimension';
import {MenuListData} from '../../data/data';
import MenuListItem from '../../components/MenuListItem';

const Health = (props: any) => {
  const press1 = () => {
    props.navigation.navigate('Health1');
  };
  const press2 = () => {
    props.navigation.navigate('SavedReceipt');
  };
  const press3 = () => {
    props.navigation.navigate('ExampleMenu');
  };
  return (
    <View style={styles.container}>
      <Header
        title={'Эрүүл ахуйн хяналт'}
        rightIconShow={true}
        titleStyle={{marginTop: 10}}
      />
      <View style={styles.wrapper}>
        <MenuListItem
          leftIcon={'apple-o'}
          name={'1.  Хүнсний түүхий эд'}
          onPress={press1}
        />
        <MenuListItem
          leftIcon={'book'}
          name={'2. Хэмийн бүртгэл'}
          onPress={press2}
        />
        <MenuListItem
          leftIcon={'broom'}
          iconType={'MaterialCommunityIcons'}
          name={'3. Цэвэрлэгээ, ариутгал'}
          onPress={press2}
        />
        <MenuListItem
          leftIcon={'clean-hands'}
          iconType={'MaterialIcons'}
          name={'4. Ажилтаны ариун цэврийн хяналт'}
          onPress={press2}
        />
        <MenuListItem
          leftIcon={'sanitizer'}
          iconType={'MaterialIcons'}
          name={'5. Халдваргүйжүүлэлт'}
          onPress={press2}
        />
        <MenuListItem
          leftIcon={'spray'}
          iconType={'MaterialCommunityIcons'}
          name={'6. Хортон шавж, мэрэгчийн тандалт'}
          onPress={press2}
        />
      </View>
    </View>
  );
};

export default Health;

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
