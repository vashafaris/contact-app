import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import TextComponent from '../Text';

const ButtonComponent = ({children, style}) => {
  return (
    <TouchableOpacity style={styles.default}>
      <TextComponent style={styles.defaultText}>{children}</TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34C859',
    paddingVertical: 8,
  },
  defaultText: {
    color: 'white',
  },
});

export default ButtonComponent;
