import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {setHeight, setWidth} from '../utils/Dimension';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const CardItem = (props: any) => {
  const {item} = props;
  return (
    <View style={styles.itemContainer}>
      <Image
        source={item.picture}
        style={styles.image}
        resizeMode="cover"
        borderTopRightRadius={10}
        borderTopLeftRadius={10}
      />
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <MaskedView
          style={{flex: 1, flexDirection: 'row', height: 40}}
          maskElement={
            <View
              style={{backgroundColor: 'transparent', alignSelf: 'flex-end'}}>
              <Icon name="chevron-right" style={styles.icon} />
            </View>
          }>
          <LinearGradient colors={['#F15A24', '#FFBD08']} style={{flex: 1}} />
        </MaskedView>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  itemContainer: {
    width: setWidth(45),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#858C9450',
    marginBottom: 10,
    marginRight: 5,
  },
  image: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    width: '100%',
    height: setHeight(16),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  type: {
    marginLeft: 10,
    fontSize: 11,
    color: '#858C94',
    fontFamily: FONTS.regular,
  },
  name: {
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.textColor,
    fontFamily: FONTS.regular,
  },
  icon: {
    marginTop: 8,
    fontSize: 35,
  },
});
