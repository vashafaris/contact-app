import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import ButtonComponent from '../Button';
import TextComponent from '../Text';

const NotFound = ({onPress}) => {
  return (
    <View data-test="component-notfound" style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/lonely.png')}
      />
      <TextComponent fontWeight="bold">Alone doesn't mean lonely</TextComponent>
      <TextComponent style={{color: 'grey'}}>
        Let's add a new friend
      </TextComponent>
      <ButtonComponent
        onPress={onPress}
        style={{borderRadius: 4, marginTop: 12, paddingHorizontal: 24}}
        color="yellow">
        Or it might be wrong, refresh here
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 72,
    height: 72,
    marginBottom: 12,
  },
});

export default NotFound;
