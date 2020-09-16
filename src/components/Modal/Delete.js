import React from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import ButtonComponent from '../Button';

import TextComponent from '../Text';

const DeleteModal = ({isVisible, isFetching, onCancel, onConfirm}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      animationInTiming={1}
      animationOutTiming={1}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/icons/bin.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.titleContainer}>
          <TextComponent
            fontWeight="bold"
            style={{fontSize: 16, textAlign: 'center'}}>
            Are you sure want to delete this contact?
          </TextComponent>
        </View>
        <View style={styles.infoContainer}>
          <TextComponent
            style={{textAlign: 'center', color: 'grey', fontSize: 12}}>
            Be Careful, they may mad at you
          </TextComponent>
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            style={{flex: 1, marginRight: 16}}
            type="secondary"
            color="red"
            onPress={onCancel}>
            Cancel
          </ButtonComponent>
          <ButtonComponent onPress={onConfirm} style={{flex: 1}} color="red">
            {!isFetching ? 'Yes' : <ActivityIndicator color="white" />}
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 24,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 64,
    height: 64,
  },
});

export default DeleteModal;
