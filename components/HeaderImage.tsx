import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS, FONTS} from '../constants';
import {setHeight} from '../utils/Dimension';
import {useNavigation} from '@react-navigation/native';

const HeaderImage = (props: any) => {
  const {title, item} = props;
  const navigation = useNavigation();

  return (
    <ImageBackground
      resizeMode="cover"
      source={item.picture}
      style={styles.image}>
      <TouchableOpacity
        style={[styles.leftContainer]}
        onPress={navigation.goBack}>
        <Icon name={'chevron-left'} style={[styles.leftIcon]} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.rightContainer}></TouchableOpacity>
      <TouchableOpacity style={styles.saveContainer}>
        <MaterialIcons name="bookmark-outline" style={styles.saveIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  image: {
    height: setHeight(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: setHeight(5),
  },
  leftContainer: {
    backgroundColor: '#fff',
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: '10%',
  },
  titleContainer: {
    width: '60%',
    marginTop: '5%',
  },
  leftIcon: {
    color: COLORS.textColor,
    fontSize: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  rightContainer: {
    width: 30,
    height: 32,

    alignItems: 'center',
  },
  rightIcon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 22,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#61D644',
    right: 5,
    top: 5,
  },
  saveContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    bottom: 0,
    right: '7%',
  },
  saveIcon: {
    color: COLORS.DEFAULT_COLOR,
    fontSize: 30,
  },
});
