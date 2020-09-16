import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from '../Icon';
import TextComponent from '../Text';

const Card = ({photo, firstName, lastName, age}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: photo,
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.profileContainer}>
          <TextComponent fontWeight="bold">
            {`${firstName} ${lastName}`}
          </TextComponent>
          <TextComponent>Age: 23</TextComponent>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={() => alert('ok')}
            source={require('../../assets/icons/bin.png')}
          />
          <Icon
            onPress={() => alert('ok')}
            source={require('../../assets/icons/edit.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 8,
    marginVertical: 8,
    padding: 12,
    elevation: 5,
  },
  infoContainer: {
    marginLeft: 12,
    flex: 1,
  },
  profileContainer: {
    flex: 0,
    marginTop: 4,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 12,
  },
});

export default Card;
