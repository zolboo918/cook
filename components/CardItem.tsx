import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {setHeight, setWidth} from '../utils/Dimension';
import {COLORS, FONTS} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const CardItem = (props: any) => {
  const {item, iconColor, iconType, onItemPress} = props;
  const iconName = iconType == 'right' ? 'chevron-right' : 'bookmark-outline';
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onItemPress}>
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
        {iconColor == COLORS.DEFAULT_COLOR ? (
          <Icon name={iconName} style={styles.icon} />
        ) : (
          <MaskedView
            style={{flex: 1, flexDirection: 'row', height: 40}}
            maskElement={
              <View
                style={{backgroundColor: 'transparent', alignSelf: 'flex-end'}}>
                <Icon name={iconName} style={styles.icon} />
              </View>
            }>
            <LinearGradient colors={['#F15A24', '#FFBD08']} style={{flex: 1}} />
          </MaskedView>
        )}
      </View>
    </TouchableOpacity>
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
    height: setHeight(19),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 3,
  },
  type: {
    marginLeft: 10,
    fontSize: 12,
    color: '#858C94',
    fontFamily: FONTS.mulishLight,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.textColor,
    fontFamily: FONTS.mulishRegular,
  },
  icon: {
    marginTop: 8,
    fontSize: 35,
    color: COLORS.DEFAULT_COLOR,
  },
});
