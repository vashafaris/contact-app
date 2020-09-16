import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const TextInputComponent = ({placeholder, value, onChangeText}) => {
  return (
    <View data-test="component-textinput" style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  inputStyle: {
    // fontSize: Variant.body2,
    flex: 1,
    // fontFamily: 'OpenSans-Regular',
  },
});

export default TextInputComponent;
