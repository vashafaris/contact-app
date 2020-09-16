import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ButtonComponent from '../../components/Button';
import Card from '../../components/Card';
import CreateModal from '../../components/Modal/Create';
import DeleteModal from '../../components/Modal/Delete';
import UpdateModal from '../../components/Modal/Update';
import NotFound from '../../components/NotFound';
import TextComponent from '../../components/Text';
import Waiting from '../../components/Waiting';
import {
  deleteContact,
  getContactList,
  postContact,
  setForm,
  setDefaultForm,
  setUpdateForm,
  putContact,
} from '../../store/actions/contactAction';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {isFetching, contactList, form} = useSelector((state) => state.contact);

  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [updateId, setUpdateId] = useState(null);

  const setDefault = (setState) => {
    setState(null);
  };

  const inputHandler = (property, value) => {
    dispatch(setForm({property: property, value: value}));
  };

  const onUpdate = (id) => {
    setUpdateId(id);
    dispatch(setUpdateForm(id, contactList));
  };

  const updateHandler = async () => {
    await dispatch(putContact(updateId, form));
    setDefault(setUpdateId);
  };

  const deleteHandler = async () => {
    await dispatch(deleteContact(deleteId));
    setDefault(setDeleteId);
  };

  const submitHandler = async () => {
    dispatch(postContact(form));
    setIsModalCreateOpen(false);
    setDefaultStore();
  };

  const setDefaultStore = () => {
    dispatch(setDefaultForm());
  };

  useEffect(() => {
    dispatch(getContactList());
  }, []);

  return (
    <>
      <View style={styles.logoContainer}>
        <Image
          style={{width: 64, height: 64}}
          source={require('../../assets/icons/chat.png')}
        />
        <TextComponent fontWeight="bold" style={{fontSize: 24, color: 'white'}}>
          Temen.in
        </TextComponent>
      </View>
      {!isFetching ? (
        <>
          {contactList.length > 0 ? (
            <>
              <ScrollView
                contentContainerStyle={styles.container}
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
                    age={item.age}
                    photo={item.photo}
                    onDelete={() => setDeleteId(item.id)}
                    onUpdate={() => onUpdate(item.id)}
                  />
                ))}
              </ScrollView>
            </>
          ) : (
            <NotFound onPress={() => dispatch(getContactList())} />
          )}

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <ButtonComponent
                onPress={() => setIsModalCreateOpen(true)}
                style={{borderRadius: 4}}>
                Add new contact
              </ButtonComponent>
            </View>
          </View>
        </>
      ) : (
        <Waiting />
      )}

      <CreateModal
        isVisible={isModalCreateOpen}
        isFetching={isFetching}
        form={form}
        setForm={inputHandler}
        onCancel={() => {
          setIsModalCreateOpen(false);
          setDefaultStore();
        }}
        onConfirm={submitHandler}
      />
      <UpdateModal
        isVisible={!!updateId}
        isFetching={isFetching}
        form={form}
        setForm={inputHandler}
        onCancel={() => {
          setDefault(setUpdateId);
          setDefaultStore();
        }}
        onConfirm={updateHandler}
      />
      <DeleteModal
        isVisible={!!deleteId}
        isFetching={isFetching}
        onCancel={() => setDefault(setDeleteId)}
        onConfirm={() => deleteHandler()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9456A',
  },
  container: {
    paddingTop: 12,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: 'white',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    marginVertical: 8,
  },
});

export default HomeScreen;
