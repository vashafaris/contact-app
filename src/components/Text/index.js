import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TextComponent = ({children, style, fontWeight, ...props}) => {
  let fontFamily = 'Poppins-Regular';
  switch (fontWeight) {
    case 'bold':
      fontFamily = 'Poppins-Bold';
      break;
    case 'light':
      fontFamily = 'Poppins-ExtraLight';
      break;
  }

  return (
    <Text {...props} style={[{fontFamily: fontFamily}, style]}>
      {children}
    </Text>
  );
};

export default TextComponent;
