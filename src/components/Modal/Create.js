import React from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import ButtonComponent from '../Button';

import TextComponent from '../Text';
import TextInputComponent from '../TextInput';

const CreateModal = ({
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
            source={require('../../assets/icons/contact.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.titleContainer}>
          <TextComponent
            fontWeight="bold"
            style={{fontSize: 16, textAlign: 'center'}}>
            Let's add some friend
          </TextComponent>
        </View>
        <View style={styles.infoContainer}>
          <TextComponent
            fontWeight="bold"
            style={{textAlign: 'center', color: 'grey', fontSize: 12}}>
            Cmon, don't be shy
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
              value={form.age}
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
            onPress={onCancel}>
            Cancel
          </ButtonComponent>
          <ButtonComponent onPress={onConfirm} style={{flex: 1}}>
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

export default CreateModal;
