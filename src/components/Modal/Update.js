import React from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import ButtonComponent from '../Button';

import TextComponent from '../Text';
import TextInputComponent from '../TextInput';

const UpdateModal = ({
  isVisible,
  isFetching,
  form,
  setForm,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      animationInTiming={1}
      animationOutTiming={1}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/icons/edit.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.titleContainer}>
          <TextComponent
            fontWeight="bold"
            style={{fontSize: 16, textAlign: 'center'}}>
            Whoops, missing something?
          </TextComponent>
        </View>
        <View style={styles.infoContainer}>
          <TextComponent
            style={{textAlign: 'center', color: 'grey', fontSize: 12}}>
            Its ok people make mistake
          </TextComponent>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.form}>
            <TextInputComponent
              placeholder="First Name"
              value={form.firstName}
              onChangeText={(text) => setForm('firstName', text)}
            />
          </View>
          <View style={styles.form}>
            <TextInputComponent
              placeholder="Last Name"
              value={form.lastName}
              onChangeText={(text) => setForm('lastName', text)}
            />
          </View>
          <View style={styles.form}>
            <TextInputComponent
              placeholder="Age"
              value={form.age.toString()}
              onChangeText={(text) => setForm('age', text)}
            />
          </View>
          <View style={styles.form}>
            <TextInputComponent
              placeholder="Photo Url"
              value={form.photo}
              onChangeText={(text) => setForm('photo', text)}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonComponent
            style={{flex: 1, marginRight: 16}}
            type="secondary"
            color="yellow"
            onPress={onCancel}>
            Cancel
          </ButtonComponent>
          <ButtonComponent onPress={onConfirm} style={{flex: 1}} color="yellow">
            {!isFetching ? 'Update' : <ActivityIndicator color="white" />}
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
  dataContainer: {
    flex: 0,
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
  form: {
    marginBottom: 12,
  },
});

export default UpdateModal;
