import React, {useRef} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from '../Icon';
import TextComponent from '../Text';

const Card = ({photo, firstName, lastName, age, onDelete, onUpdate}) => {
  const imageRef = useRef(null);
  return (
    <View data-test="component-card" style={styles.container}>
      <Image
        ref={imageRef}
        style={styles.image}
        defaultSource={require('../../assets/icons/default-photo.png')}
        source={
          photo != 'N/A'
            ? {
                uri: photo,
              }
            : require('../../assets/icons/default-photo.png')
        }
      />
      <View style={styles.infoContainer}>
        <View style={styles.profileContainer}>
          <TextComponent style={{color: 'grey'}}>
            Born {2020 - age}{' '}
            <TextComponent fontWeight="bold">({age})</TextComponent>
          </TextComponent>
          <TextComponent fontWeight="bold" style={{fontSize: 16}}>
            {`${firstName} ${lastName}`}
          </TextComponent>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            onPress={onDelete}
            source={require('../../assets/icons/bin.png')}
          />
          <Icon
            onPress={onUpdate}
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
    marginVertical: 4,
    padding: 12,
    elevation: 4,
  },
  infoContainer: {
    marginLeft: 24,
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    marginTop: 4,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  image: {
    height: 88,
    width: 88,
    borderRadius: 100,
  },
});

export default Card;
