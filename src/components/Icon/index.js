import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const Icons = ({source, onPress, style, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
      <Image {...props} source={source} style={[styles.icon, style]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
});

export default Icons;
