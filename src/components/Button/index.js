import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import TextComponent from '../Text';

const ButtonComponent = ({onPress, children, type, color, style}) => {
  let colorStyle;
  let styleType;

  switch (color) {
    case 'red':
      colorStyle = {
        primary: '#FF453B',
        secondary: 'white',
      };
      break;
    case 'yellow':
      colorStyle = {
        primary: '#FFC50D',
        secondary: 'white',
      };
      break;
    default:
      colorStyle = {
        primary: '#5EA0FC',
        secondary: 'white',
      };
  }

  switch (type) {
    case 'primary':
      styleType = {
        button: styles(colorStyle).primaryButton,
        text: styles(colorStyle).primaryText,
      };
      break;
    case 'secondary':
      styleType = {
        button: styles(colorStyle).secondaryButton,
        text: styles(colorStyle).secondaryText,
      };
      break;
    default:
      styleType = {
        button: styles(colorStyle).primaryButton,
        text: styles(colorStyle).primaryText,
      };
  }

  return (
    <TouchableOpacity
      data-test="component-button"
      style={[styles(colorStyle).default, styleType.button, style]}
      onPress={onPress}>
      <TextComponent style={styleType.text}>{children}</TextComponent>
    </TouchableOpacity>
  );
};

const styles = (props) =>
  StyleSheet.create({
    default: {
      elevation: 3,
      borderRadius: 24,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      backgroundColor: 'white',
    },
    primaryButton: {
      backgroundColor: props.primary,
    },
    secondaryButton: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: props.primary,
    },
    primaryText: {
      color: props.secondary,
    },
    secondaryText: {
      color: props.primary,
    },
  });

export default ButtonComponent;
