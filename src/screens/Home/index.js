import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../../components/Button';

import Card from '../../components/Card';
import {getContactList} from '../../store/actions/contactAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {isFetching, contactList} = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContactList());
    console.log('halo');
  }, []);

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{flex: 0.9}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => dispatch(getContactList())}
          />
        }>
        {contactList.map((item) => (
          <Card
            key={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            photo={item.photo}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          {/* <Button title="Add new contact" /> */}
          <ButtonComponent>Add new contact</ButtonComponent>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.1,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
  },
});

export default HomeScreen;
